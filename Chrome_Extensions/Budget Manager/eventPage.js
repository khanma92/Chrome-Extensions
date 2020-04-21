var contextMenuItem = {
    "id": "spendMoney",
    "title": "SpendMoney",
    "contexts": ["selection"] // go through chrome developer webpage for more info on this
};

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create(contextMenuItem);
  });

function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

chrome.contextMenus.onClicked.addListener(function(clickData) { // listening to the click event on the context menu
    if (clickData.menuItemId == "spendMoney" && clickData.selectionText) {  // if what the user clicked on is our menu item AND there is some selected data
        if (isInt(clickData.selectionText)) {
            chrome.storage.sync.get(['total', 'limit'], function(budget){
                var newTotal = 0;
                if (budget.total) { // if there is an existing total 
                    newTotal += parseInt(budget.total);
                }
                newTotal += parseInt(clickData.selectionText); // add to this whatever the user selected
                chrome.storage.sync.set({'total': newTotal}, function() {
                    if (newTotal >= budget.limit) {
                        var notifOptions = { 
                            type: 'basic',
                            iconUrl: 'icon48.png',
                            title: 'Limit reached!', 
                            message: "Uh oh! Looks like ou've reached your limit!"
                        };
                        chrome.notifications.create('limitNotif', notifOptions); 
                    }

                }); chrome.notifications.clear('limitNotif');
            })
        }
    } 
})