let currentData = {};
// Handle Dropdown Change to show/hide Scan button
document.getElementById('categorySelect').addEventListener('change', (e) => {
  const scanBtn = document.getElementById('scanMirrorBtn');
  const statusDiv = document.getElementById('scanStatus');
 
  if (e.target.value === 'mirror') {
    scanBtn.style.display = 'block';
    document.getElementById('checkBtn').innerText = "Check vs Mirror";
    // NEW: Check if we already have a saved reference and show its name
    chrome.storage.local.get(['mirrorSource'], (result) => {
      if (result.mirrorSource) {
        statusDiv.innerText = `Current Reference: ${result.mirrorSource}`;
      } else {
        statusDiv.innerText = "No reference saved yet.";
      }
    });
 
  } else {
    scanBtn.style.display = 'none';
    document.getElementById('checkBtn').innerText = "Check Settings";
    statusDiv.innerText = ""; // Clear status for other modes
  }
});
// 1. SCAN REFERENCE BUTTON LOGIC
document.getElementById('scanMirrorBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // NEW: Capture the title of the current tab (Property Name)
    const currentTitle = tabs[0].title;
 
    chrome.tabs.sendMessage(tabs[0].id, { action: "getSettings" }, (response) => {
      if (response && response.mirror) {
        // Save the ACTUAL values AND the Page Title
        const referenceData = response.mirror;
        // NEW: Save 'mirrorSource' string alongside the data
        chrome.storage.local.set({ 
          'mirrorRef': referenceData, 
          'mirrorSource': currentTitle 
        }, () => {
          const statusDiv = document.getElementById('scanStatus');
          statusDiv.innerText = `Saved: "${currentTitle}"`;
          statusDiv.style.color = "green";
          // Visual feedback on button
          const btn = document.getElementById('scanMirrorBtn');
          const originalText = btn.innerText;
          btn.innerText = "Saved ✓";
          setTimeout(() => btn.innerText = originalText, 2000);
        });
      } else {
        document.getElementById('scanStatus').innerText = "Failed to scan reference.";
        document.getElementById('scanStatus').style.color = "red";
      }
    });
  });
});
// 2. CHECK SETTINGS LOGIC
document.getElementById('checkBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getSettings" }, (response) => {
      if (response) {
        const selectedCategory = document.getElementById('categorySelect').value;
        // If Mirror is selected, we need to fetch the reference data first
        if (selectedCategory === 'mirror') {
          chrome.storage.local.get(['mirrorRef', 'mirrorSource'], (result) => {
            if (!result.mirrorRef) {
              alert("No reference data found. Please scan a reference site first.");
              return;
            }
            // Optional: Update status to remind user what they are comparing against
            document.getElementById('scanStatus').innerText = `Comparing against: ${result.mirrorSource}`;
 
            // Overwrite the 'expected' values in the current response with the 'actual' values from storage
            const ref = result.mirrorRef;
            const target = response.mirror;
            for (const [key, val] of Object.entries(target)) {
              // Set Expectation based on Reference
              if (ref[key]) {
                target[key].expected = ref[key].actual; 
                // Handle Sub-settings
                if (val.subSettings && ref[key].subSettings) {
                  for (const [subKey, subVal] of Object.entries(val.subSettings)) {
                    if (ref[key].subSettings[subKey]) {
                      target[key].subSettings[subKey].expected = ref[key].subSettings[subKey].actual;
                    }
                  }
                }
              }
            }
            currentData = response; // Store for export
            processAndDisplay(target);
          });
        } else {
          // Standard Essentials/Concierge Flow
          currentData = response;
          processAndDisplay(response[selectedCategory]);
        }
      } else {
        document.getElementById('errorLog').innerText = "No data found. Refresh the page.";
      }
    });
  });
});
// Helper function to process the logic
function processAndDisplay(features) {
  // LOGIC UPDATE: Check the manual UI checkbox
  const isPropertyBoxChecked = document.getElementById('rentersPropertyBox').checked;
  // If the manual box is NOT checked, force the Renters Insurance actual state to "Off"
  if (features["Renters Insurance with eRenterPlan"] && !isPropertyBoxChecked) {
      features["Renters Insurance with eRenterPlan"].actual = "Off";
  }
  displayResults(features);
}
document.getElementById('exportBtn').addEventListener('click', () => {
  const selectedCategory = document.getElementById('categorySelect').value;
  // For export, we use the global currentData which has been updated with mirror logic if applicable
  const featuresToExport = currentData[selectedCategory] || currentData['mirror']; // Fallback
  if (!featuresToExport) {
    alert("Please check settings first.");
    return;
  }
  const rows = ["Category,Feature,Sub-Setting,Expected,Actual"];
  for (const [feature, states] of Object.entries(featuresToExport)) {
    rows.push(`"${selectedCategory}","${feature}","","${states.expected}","${states.actual}"`);
    for (const [subFeature, subStates] of Object.entries(states.subSettings)) {
      rows.push(`"${selectedCategory}","${feature}","${subFeature}","${subStates.expected}","${subStates.actual}"`);
    }
  }
  const blob = new Blob([rows.join("\n")], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `settings_${selectedCategory}.csv`;
  a.click();
});
function displayResults(features) {
  const progressContainer = document.getElementById('progressContainer');
  const progressBar = document.getElementById('progressBar');
  const errorLog = document.getElementById('errorLog');
  progressContainer.style.display = 'block';
  errorLog.innerHTML = '';
  let totalChecks = 0;
  let passedChecks = 0;
  let errorsHTML = '';
 
  function checkItem(name, expected, actual) {
    totalChecks++;
    if (String(expected).toLowerCase() === String(actual).toLowerCase()) {
      passedChecks++;
    } else {
      // Add clickable element with data-feature
      errorsHTML += `
<div class="error-item" data-feature="${name}">
<span class="error-title clickable">${name}</span>
<div class="error-detail">Expected: <b>${expected}</b> | Actual: <b>${actual}</b></div>
</div>`;
    }
  }
 
  for (const [feature, states] of Object.entries(features)) {
    checkItem(feature, states.expected, states.actual);
    for (const [subFeature, subStates] of Object.entries(states.subSettings)) {
      checkItem(`${feature} > ${subFeature}`, subStates.expected, subStates.actual);
    }
  }
 
  const percentage = totalChecks === 0 ? 0 : Math.round((passedChecks / totalChecks) * 100);
  progressBar.style.width = percentage + '%';
  progressBar.innerText = percentage + '% Completed';
  progressBar.className = '';
  if (percentage < 50) progressBar.classList.add('low-score');
  else if (percentage < 100) progressBar.classList.add('mid-score');
 
  if (percentage === 100) {
    errorLog.innerHTML = '<p style="color:green; text-align:center;">All settings match perfectly!</p>';
  } else {
    errorLog.innerHTML = `<h3>Mismatches Found:</h3>${errorsHTML}`;
    attachClickHandlers();
  }
}
 
// To direct user to the module with error
function attachClickHandlers() {
  document.querySelectorAll('.error-item').forEach(el => {
    el.style.cursor = 'pointer'; 
    el.addEventListener('click', () => {
      const featureName = el.getAttribute('data-feature');
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "highlightError",
          feature: featureName
        });
      });
    });
  });
}