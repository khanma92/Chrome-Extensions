// the javascript that runs on the chrome url 

chrome.runtime.sendMessage({todo: "showPageAction"}); // the content script is asking to show the page action, we have to listen to the message in the event page

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.todo == "changeColor") {
        var addColor = '#' + request.clickedColor; // the clicked color that is sent in popup.js
        $('.api').css('color', addColor);
    }
})