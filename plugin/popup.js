// get button with #add , when clicked send new event omni-auto-find
document.querySelector('#add').addEventListener('click', () => {
    // fill the #keys div with buttons for each key source from browser.storage.local, when clicked send new event omni-get-api-key with the
    // key as the detail
    browser.storage.local.get().then((keys) => {
        document.querySelector('#keys').innerHTML = Object.keys(keys).map((key) => {
            return `<button class="key" id="key-${key}">${key}</button>`
        }).join('')
        Object.keys(keys).forEach((key) => {
            document.querySelector(`#key-${key}`).addEventListener('click', () => {
                window.dispatchEvent(new CustomEvent('omni-get-api-key', {detail: {source: key, callbackListener: 'omni-process-alone'}}))
            })
        })
    })
    // add omni-process-alone listener to window, when event is received, copy the key to the users clipboard and alert them
    window.addEventListener('omni-process-alone', (e) => {
        let s = localStorage.getItem("omni-api-key");
        if (s && s !== "denied" && s !== "undefined") {
            window.navigator.clipboard.writeText(s).then(function() {
                alert("Key has been copied to clipboard. Please paste the api key to the input");
            });
        }
        else if (s === "denied") {
        }
        else {
            alert("No API key found");
        }
    })

});
