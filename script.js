let DELIMITER = "HIGHDELIMITER;,"

function setSelection(info, tab) {
    let currentTab = tab.url;
    chrome.storage.local.set({ currentTab: info.selectionText }, function () {
        alert("Saved");
    });
}

chrome.contextMenus.create({
    title: "Highlight: %s",
    contexts: ["selection"],
    onclick: setSelection
});