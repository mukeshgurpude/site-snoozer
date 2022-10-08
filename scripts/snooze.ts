document.getElementById('snooze')?.addEventListener('click', function(ev) {
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    })
    .then(tab => {
        if (!tab || tab.length == 0) return

        const url = tab[0].url

        chrome.alarms.create(url as string, {
            delayInMinutes: 10
        })
        console.debug(`Created an alarm for ${url}`)
    })
})
