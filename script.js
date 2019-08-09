let DELIMITER = "HIGHDELIMITER;,"

function setSelection(info, tab) {
    let currentTab = tab.url;

    chrome.storage.sync.get(currentTab, function (result) {
        alert(result.toString());
        alert(Object.keys(result));
        if (!result) {
            content = [info.selectionText];
        } else {
            content = result.currentTab;
            content.push(info.selectionText);
        }

        chrome.storage.sync.set({ currentTab: content }, function () {
        });
    });


}

chrome.contextMenus.create({
    title: "Highlight: %s",
    contexts: ["selection"],
    onclick: setSelection
});