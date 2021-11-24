let changeColor = document.getElementById("changeColor");
let showFailedButton = document.getElementById("showFailedButton");
let showPassedButton = document.getElementById("showPassedButton");
let showQuarterButton = document.getElementById("showQuarterButton");
let showMonthButton = document.getElementById("showMonthButton");
let showPersonalButton = document.getElementById("showPersonalButton");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
///////////////

function showFailed() {
  document.querySelectorAll(".statusFilter").forEach(e => {
  var statusFilter =  e.firstElementChild;
  if(!statusFilter.checked) statusFilter.click();
  });
}
function showPassed() {
  document.querySelectorAll(".statusFilter").forEach(e => {
  var statusFilter =  e.firstElementChild;
  if(statusFilter.checked) statusFilter.click();
  });
}
function showQuarter() {
  document.querySelectorAll(".rangeFilter>select").forEach(e => {
    e.value = "QUARTER"; var changeEvent = document.createEvent("HTMLEvents");
    changeEvent.initEvent("change", true, true); e.dispatchEvent(changeEvent);});
}
function showMonth() {
  document.querySelectorAll(".rangeFilter>select").forEach(e => {
    e.value = "MONTH"; var changeEvent = document.createEvent("HTMLEvents");
  changeEvent.initEvent("change", true, true); e.dispatchEvent(changeEvent);});
}
function showPersonal() {
  document.querySelectorAll(".personalBuildFilter").forEach(e => {
  var statusFilter =  e.firstElementChild;
  if(!statusFilter.checked) statusFilter.click();
  });
}



showFailedButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showFailed,
  });
});
showPassedButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showPassed,
  });
});
showQuarterButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showQuarter,
  });
});
showMonthButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showMonth,
  });
});
showPersonalButton.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: showPersonal,
  });
});
