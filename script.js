let omni = window
function requestKey(source, callback) {
    let callbackListener = "callback";
    // add an event listener to the window object
    omni.addEventListener(callbackListener, function (e) {
        let s = localStorage.getItem("omni-api-key");
        if (s) {
            callback(s);
        }
    });
    console.log("requesting key");
    // omni-get-api-key is the event we want to dispatch
    // this function is dispatched by a button click, make sure to pass the source
    // so that the event handler knows where to send the key
    let event = omni.dispatchEvent(new CustomEvent("omni-get-api-key", { detail: { source, callbackListener } }));
    console.log(event)
}
