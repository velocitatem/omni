window.addEventListener("omni-get-api-key", async function(e) {
    // dispatch an event to e.detail.callbackListener
    // with the api key
    let source = e.detail.source;
    // get the source key from browser.storage.local
    let key = {[source]: "denied"};
    let consent = confirm("Allow access to your API key from "+source+"?");
    if (consent) {
        key = await browser.storage.local.get(source);
        localStorage.setItem("omni-api-key", key[source]);
        let event = new CustomEvent(e.detail.callbackListener, {
            detail: {
                apiKey: "omni-api-key"
            }
        });
        window.dispatchEvent(event);
    }
    else {
        let event = new CustomEvent(e.detail.callbackListener, {
            detail: {
                apiKey: "denied"
            }
        });
        window.dispatchEvent(event);
    }


}, false);

// does not fully work yet
function autoFind() {
    let list = document.querySelectorAll("input[placeholder^='omni-']");
    console.log(list);
    list.forEach(function(input) {
        let omni = window;
        // get the placeholder, it will look like this:
        let source = input.placeholder.split("-")[1];
        // create a new event
        let callbackListener = "callback";
        // add an event listener to the window object
        omni.addEventListener(callbackListener, function (e) {
            let s = localStorage.getItem("omni-api-key");
            console.log(s);
            if (s && s !== "denied" && s !== "undefined") {
                // simulate user input by clicking the input
                // copy the api key to clipboard
                // ask user to paste the api key
                alert("Key has been copied to clipboard. Please paste the api key to the input");
                window.navigator.clipboard.writeText(s).then(function() {
                    input.click();
                });
            }
            else if (s === "denied") {
            }
            else {
                alert("No API key found");
            }
        });
        console.log("requesting key");
        // omni-get-api-key is the event we want to dispatch
        // this function is dispatched by a button click, make sure to pass the source
        // so that the event handler knows where to send the key
        let event = omni.dispatchEvent(new CustomEvent("omni-get-api-key", { detail: { source, callbackListener } }));
    });
}



// add event listener for autoFind
window.addEventListener("omni-auto-find", autoFind);
