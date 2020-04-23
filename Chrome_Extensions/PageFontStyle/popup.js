$(function(){
    var color = $('#fontColor').val(); // get the value that the user has typed in the color picker
    $('#fontColor').on("change paste keyup", function(){ //listen to 3 different things, 1) when the value changes, 2) when the user copy-pastes a value in the textbox, 3) when someting is typed 
        color = $(this). val(); // assigns the particular value if one of those 3 things happen, the value is the input from the textbox
    });

    $('#btnChange').click(function(){ // listen to the click event on the submit button
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ // sending a message to the tab from where we clicked the button
            chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color}) // specify what the message contains once we have the tab
        });
    })
})