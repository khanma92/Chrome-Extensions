var menuItem = {
    "id": "wikiword", 
    "title": "WikiWord", 
    "contexts": ["selection"] // when do we want this item to appear? When there is a selection 
}; 

chrome.contextMenus.create(menuItem);
function fixedEncodeURI(str) { // any text that you select, it will prepare it into a format that can be appended to a URL 
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
};

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "wikiword" && clickData.selectionText) {
        var wikiUrl = 'https://en.wikipedia.org/wiki/' + fixedEncodeURI(clickData.selectionText); // append to it the selection text encoded
        var createData = { // create a new window with the wikiUrl
            "url": wikiUrl,
            "type": "popup", 
            "top": 5,
            "left": 5, 
            "width": screen.availWidth/2, 
            "height": screen.availHeight/2
        };

        chrome.windows.create(createData, function(){});
    }
})

