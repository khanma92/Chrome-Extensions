$(function(){

    chrome.storage.sync.get('total', function(budget){
        $('#total').text(budget.total)
    }) // this gets the previous value that we stored so we don't start from zero each time

    $('#spendAmount').click(function(){ // the code below executes once we click on the submit button
        chrome.storage.sync.get('total', function(budget) {
            var newTotal = 0;
            if (budget.total){
                newTotal += parseInt(budget.total);
            }
            var amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }

            chrome.storage.sync.set({'total': newTotal});
            $('#total').text(newTotal);
            $('#amount').val('');
        })
    })
})