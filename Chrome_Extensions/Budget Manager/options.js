// what happens when we click on saveLimit and resetTotal

$(function() {

    chrome.storage.sync.get('limit', function(budget) {
        $('#limit').val(budget.limit)
    })

    $('#saveLimit').click(function() {
        var limit = $('#limit').val();
        if(limit) {
            chrome.storage.sync.set({'limit': limit}, function() {
                close(); // close the tab once limit is set
            })
        }
    })

    $('resetTotal').click(function() {
        chrome.storage.sync.set({'total': 0})
    })
})