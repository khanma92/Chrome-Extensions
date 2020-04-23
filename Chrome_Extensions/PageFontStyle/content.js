// the javascript that runs on the chrome url 

chrome.runtime.sendMessage({todo: "showPageAction"}); // the content script is asking to show the page action, we have to listen to the message in the event page