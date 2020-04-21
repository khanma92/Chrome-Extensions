$(function(){

    chrome.storage.sync.get(['total', 'limit'], function(budget){
        $('#total').text(budget.total)
        $('#limit').text(budget.limit)
    }) // this gets the previous value that we stored so we don't start from zero each time

    $('#spendAmount').click(function(){ // the code below executes once we click on the submit button
        chrome.storage.sync.get(['total', 'limit'], function(budget) { // everytime you need to get more things, add those things in an array
            var newTotal = 0;
            if (budget.total){
                newTotal += parseInt(budget.total);
            }
            var amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal}, function() {
                if (amount && newTotal >= budget.limit){
                    var notifOptions = { //go over Chrome developer website to review other kinds of options
                        type: 'basic',
                        iconUrl: 'icon48.png',
                        title: 'Limit reached!', 
                        message: "Uh oh! Looks like you've reached your limit!"
                    };
                    chrome.notifications.create('limitNotif', notifOptions); // use chrome API to create notification
                }
            });
            $('#total').text(newTotal);
            $('#amount').val('');
        })

        chrome.notifications.clear('limitNotif')
    })
})