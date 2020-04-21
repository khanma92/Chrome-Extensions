var contextMenuItem = {
    "id": "spendMoney",
    "title": "SpendMoney",
    "contexts": ["selection"] // go through chrome developer webpage for more info on this
};

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create(contextMenuItem);
  });