// what happens when we click on saveLimit and resetTotal

$(function() {

    chrome.storage.sync.get('limit', function(budget) {
        $('#limit').val(budget.limit)
    })

    $('#saveLimit').click(function() {
        var limit = $('#limit').val();
        if(limit) {
            chrome.storage.sync.set({'limit': limit}, function() {
                var notifOptions = { 
                    type: 'basic',
                    iconUrl: 'icon48.png',
                    title: 'New limit saved!', 
                    message: "Your new limit has been reset to " + limit.toString()
                };
                chrome.notifications.create('savedNotif', notifOptions);
                close(); // close the tab once limit is set
            })

            chrome.notifications.clear('savedNotif');
        }
    })

    $('#resetTotal').click(function() {
        chrome.storage.sync.set({'total': 0}, function() {
            var notifOptions = { 
                type: 'basic',
                iconUrl: 'icon48.png',
                title: 'Total reset!', 
                message: "Total has been reset to 0"
            };
            chrome.notifications.create('totalNotif', notifOptions); 
        })

        chrome.notifications.clear('totalNotif');
    })
})