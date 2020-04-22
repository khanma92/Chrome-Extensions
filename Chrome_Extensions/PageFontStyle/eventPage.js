chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){ // listen to all messages
    // request parameter is all the incoming requests from the event page
    if (request.todo == "showPageAction") { 
        chrome.tabs.query({active:true, currentWindow: true, function(tabs) { // retrieves all the tabs that are active in the current window
            chrome.pageAction.show(tabs[0].id);
        }}) 
    }
})
