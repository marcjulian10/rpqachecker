const featureMapping = {
  essentials: {
    "Amenity Reservations": { expected: "Off" },
    "DIY Videos and Manuals": { expected: "Off" },
    "Community Rewards": { expected: "Off" },
    "Documents": { expected: "On" },
    "Entry Log": { expected: "Off" },
    "Events": { expected: "Off" },
    "Front Desk Instructions": { expected: "Off" },
    "Inventory Log": { expected: "Off" },
    "Key Log": { expected: "Off" },
    "Live Chat": { expected: "Off" },
    "Lobby Display Screen": { expected: "Off" },
    "Marketplace": { expected: "Off"},
    "Messaging": { expected: "On" },
    "On-Site Renewals": { expected: "Off" },
    "Package Management": { expected: "Off" },
    "Parking & Storage Spaces": { expected: "Off" },
    "Parking Passes": { expected: "Off" },
    "Quick Link Phone Numbers": { expected: "Off" },
    "Payment Center": { expected: "On", subSettings: {
      "Payments Provider": "RealPage Widgets",
      "Also use Service Requests Widget": "Unchecked",
      "Also use Lease Renewal Widget": "Checked"
    }},
    "Renters Insurance with eRenterPlan": { expected: "On" },
    "Service Requests": { expected: "On", subSettings: {
      "Module Name": "Work Orders",
      "Disable staff interface if external integration is available": "Unchecked",
      "Allow residents to leave feedback on completed requests": "Checked",
      "Collect pet information": "Checked",
      "Allow Photo Attachments": "Checked",
      "Allow video attachments": "Checked",
      "Require alarm code": "Unchecked",
      "Collect Permission to enter options": "Checked",
      "Add the following message to the top of the new request form": "Blank"
    }},
    "Services":{expected:"Off"},
    "Setup Utilities with Allconnect":{expected:"Off"},
    "Simple Bills":{expected:"Off"},
    "Stratis": { expected: "Off" }
  },
  concierge: {
    "Amenity Reservations": { expected: "On" },
    "Community Rewards": { expected: "Off" },
    "DIY Videos and Manuals": { expected: "Off" },
    "Documents": { expected: "On" },
    "Entry Log": { expected: "Off" },
    "Events": { expected: "On" },
    "Front Desk Instructions": { expected: "Off" },
    "Inventory Log": { expected: "Off" },
    "Key Log": { expected: "Off" },
    "Live Chat": { expected: "Off" },
    "Lobby Display Screen": { expected: "On" },
    "Marketplace": { expected: "On", subSettings:{
      "Show Amenities":  "Checked" ,
      "Show Events": "Checked" ,
      "Show Services": "Checked",
      "Enable the RealPage Ledger payment option":  "Unchecked",} },
    "Messaging": { expected: "On" },
    "Package Management": { expected: "On", subSettings: {
      "Use an icon view instead of a list view ": "Unchecked",
      "Require a signature for releasing package": "Checked",
      "Default Station Name": "Office"
    }},
    "Parking & Storage":{expected:"Off"},
    "Parking Passes":{expected:"Off"},
    "Payment Center":{expected:"On", subSettings:{
      "Payments Provider":"RealPage Widgets",
      "Also use Service Requests Widget":"Off",
      "Also use Lease Renewal Widget":"On"
    }},
    "Quick Link Phone Numbers": { expected: "On" },
    "Renters Insurance with eRenterPlan": { expected: "On" },
    "Resident Satisfaction Surveys": { expected: "On", subSettings:{"Send new surveys every":"120"} },
    "Service Requests": { expected: "On", subSettings:{
      "Module Name": "Service Requests",
      "Disable staff interface if external integration is available": "Unchecked",
      "Allow residents to leave feedback on completed requests": "Checked",
      "Collect pet information": "Checked",
      "Allow Photo Attachments": "Checked",
      "Allow video attachments": "Checked",
      "Require alarm code": "Unchecked",
      "Collect Permission to enter options": "Checked",
      "Require residents to request a specific date":"Unchecked",
      "Require resident to answer questions":"Unchecked",
      "Do not allow same day service requests":"Unchecked",
      "Add the following message to the top of the new request form": ""
    } },
    "Services":{expected:"On"},
    "Setup Utilities with Allconnect":{expected:"On"},
    "Simple Bills":{expected:"On"},
    "Stratis":{expected:"On"},
    "Wall": { expected: "On" }
  },
  // Mirror uses the same list as Concierge to ensure it scans everything
  mirror: {
    "Amenity Reservations": { expected: "TBD" },
    "Community Rewards": { expected: "TBD" },
    "DIY Videos and Manuals": { expected: "TBD" },
    "Documents": { expected: "TBD" },
    "Entry Log": { expected: "TBD", subSettings:{
      "Require a signature for logging in visitors":  "TBD" ,
      "Auto expire visitors after": "TBD"} },
    "Events": { expected: "TBD" },
    "Front Desk Instructions": { expected: "TBD", subSettings:{
      "Enable mail Holds":  "TBD" ,
      "Enable General Instructions": "TBD" ,
      "Collect resident signature for guests added by staff on resident's behalf": "TBD",
      "Enable Guest Form custom disclaimer":  "TBD",
      "Remove Photo from Add a Guest form":  "TBD",} },
    "Inventory Log": { expected: "TBD" },
    "Key Log": { expected: "TBD", subSettings:{
      "Require a signature for releasing keys":  "TBD"  }},
    "Live Chat": { expected: "TBD" },
    "Lobby Display Screen": { expected: "TBD" },
    "Marketplace": { expected: "TBD", subSettings:{
      "Show Amenities":  "TBD" ,
      "Show Events": "TBD" ,
      "Show Services": "TBD",
      "Enable the RealPage Ledger payment option":  "TBD",} },
    "Messaging": { expected: "TBD" },
    "Package Management": { expected: "TBD", subSettings: {
      "Use an icon view instead of a list view ": "TBD",
      "Require a signature for releasing package": "TBD",
      "Default Station Name": "TBD"
    }},
    "Parking & Storage":{expected:"TBD"},
    "Parking Passes":{expected:"TBD",subSettings:{
      "Total Available Daily Parking Passes":  "TBD" ,
      "No Limit": "TBD" ,
      "Residents can issue parking passes": "TBD"} },
    "Payment Center":{expected:"TBD", subSettings:{
      "Payments Provider":"TBD",
      "Also use Service Requests Widget":"TBD",
      "Also use Lease Renewal Widget":"TBD"
    }},
    "Quick Link Phone Numbers": { expected: "TBD" },
    "Renters Insurance with eRenterPlan": { expected: "TBD" },
    "Resident Satisfaction Surveys": { expected: "TBD", subSettings:{"Send new surveys every":"TBD"} },
    "Service Requests": { expected: "TBD", subSettings:{
      "Module Name": "TBD",
      "Disable staff interface if external integration is available": "TBD",
      "Allow residents to leave feedback on completed requests": "TBD",
      "Collect pet information": "TBD",
      "Allow Photo Attachments": "TBD",
      "Allow video attachments": "TBD",
      "Require alarm code": "TBD",
      "Collect Permission to enter options": "TBD",
      "Require residents to request a specific date":"TBD",
      "Require resident to answer questions":"TBD",
      "Do not allow same day service requests":"TBD",
      "Add the following message to the top of the new request form": ""
    } },
    "Services":{expected:"TBD"},
    "Setup Utilities with Allconnect":{expected:"TBD", subSettings:{
      "Bundle": "TBD",
      "Electricity": "TBD",
      "Gas": "TBD",
      "Phone": "TBD",
      "Service": "TBD",
      "Video": "TBD",
      "Hsi": "TBD",}},
    "Simple Bills":{expected:"TBD"},
    "Stratis":{expected:"TBD"},
    "Wall": { expected: "TBD", subSettings:{
      "Enable Profanity Filter": "TBD",
      "When a general discussion is posted": "TBD",
      "When a Marketplace listing is posted": "TBD",
      "When a Neighbor's Recommendation is posted": "TBD",
      "When a poll is posted": "TBD", }}
  }
};
 
// Main feature state: On/Off
function getMainState(element) {
  const input = element.closest('div')?.querySelector('input[type="checkbox"], input[type="radio"]');
  if (input) return input.checked ? "On" : "Off";
 
  const select = element.closest('div')?.querySelector('select');
  if (select) return select.value || "Not Found";
 
  const textbox = element.closest('div')?.querySelector('input[type="text"], textarea');
  if (textbox) return textbox.value.trim() === "" ? "Blank" : textbox.value.trim();
 
  const siblingValue = element.closest('div')?.querySelector('.value-class')?.textContent.trim();
  return siblingValue || "Not Found";
}
 
// Sub-settings state: Checked/Unchecked or text
function getSubState(element) {
  const input = element.closest('div')?.querySelector('input[type="checkbox"], input[type="radio"]');
  if (input) return input.checked ? "Checked" : "Unchecked";
 
  const select = element.closest('div')?.querySelector('select');
  if (select) return select.value || "Not Found";
 
  const textbox = element.closest('div')?.querySelector('input[type="text"], textarea');
  if (textbox) return textbox.value.trim() === "" ? "Blank" : textbox.value.trim();
 
  const siblingValue = element.closest('div')?.querySelector('.value-class')?.textContent.trim();
  return siblingValue || "Not Found";
}
 

function getSettings() {
  const results = { essentials: {}, concierge: {}, mirror: {} };

  for (const [category, features] of Object.entries(featureMapping)) {
    for (const [feature, details] of Object.entries(features)) {
      const element = [...document.querySelectorAll('label, span, div')]
        .find(el => el.textContent.trim().toLowerCase() === feature.toLowerCase());

      const actualState = element ? getMainState(element) : "Not Found";

      // For Essentials & Concierge: skip features that are not present on the page
      if ((category === "essentials" || category === "concierge") && actualState === "Not Found") {
        continue;
      }

      // Record feature (Mirror always records, Essentials/Concierge only if found)
      results[category][feature] = { expected: details.expected, actual: actualState, subSettings: {} };

      // Handle sub-settings
      if (details.subSettings) {
        for (const [subFeature, subExpected] of Object.entries(details.subSettings)) {
          const subElement = [...document.querySelectorAll('label, span, div')]
            .find(el => el.textContent.trim().toLowerCase() === subFeature.toLowerCase());

          const subActual = subElement ? getSubState(subElement) : "Not Found";

          // For Essentials & Concierge: only include sub-settings that are present
          if ((category === "essentials" || category === "concierge" || category ==="mirror") && subActual === "Not Found") {
            continue;
          }

          results[category][feature].subSettings[subFeature] = { expected: subExpected, actual: subActual };
        }
      }
    }
  }

  return results;
}

 
// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getSettings") {
    sendResponse(getSettings());
  }
 
  if (request.action === "highlightError") {
    const featureName = request.feature;
    const parts = featureName.split(' > ').map(p => p.trim().toLowerCase());
 
    let element = null;
 
    if (parts.length === 2) {
      // Sub-feature case
      const [mainFeature, subFeature] = parts;
      element = [...document.querySelectorAll('label, span, div')]
        .find(el => el.textContent.trim().toLowerCase() === subFeature);
    }
 
    if (!element) {
      // Fallback to main feature
      element = [...document.querySelectorAll('label, span, div')]
        .find(el => el.textContent.trim().toLowerCase() === parts[0]);
    }
 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      element.style.transition = 'background-color 0.5s ease';
      element.style.backgroundColor = 'yellow';
      setTimeout(() => element.style.backgroundColor = '', 3000);
    } else {
      console.warn(`Feature "${featureName}" not found on page.`);
    }
  }
});