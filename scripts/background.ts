chrome.alarms.onAlarm.addListener(ev => {
    console.debug('Received an alarm')
    chrome.notifications.create(ev.name, {
        message: 'Test notification',
        iconUrl: '../icons/android-chrome-192x192.png',
        requireInteraction: true,
        type: 'basic',
        title: 'Notification',
        buttons: [
            {
                title: 'Remind me after 2 minutes',
            }
        ]
    })
    chrome.alarms.clear(ev.name)
})

chrome.notifications.onClosed.addListener(function(noteId) {
    chrome.alarms.create(noteId, {
        delayInMinutes: 1
    })
})

chrome.notifications.onButtonClicked.addListener(function(noteId) {
    chrome.alarms.create(noteId, {
        delayInMinutes: 2
    })
})

chrome.notifications.onClicked.addListener(function(noteId) {
    chrome.tabs.create({
        active: true,
        url: noteId
    })
})
