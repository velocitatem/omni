let storage = window.localStorage;

window.addEventListener("omni-get-api-key", function(param) {
    init()
    var keys = storage.getItem("keys");
    let keyResult = keys[param.detail.source];
    console.log(param)
    param.detail.callback(keyResult);
})

// add a key to the keys object
window.addEventListener("omni-add-api-key", function(param) {
    init()
    // use storage to get keys object
    var keys = storage.getItem("keys");
    keys[param.detail.source] = param.detail.key;
    storage.setItem("keys", keys);
})

function init() {
    // if storage does not have a keys object, create one
    if (!storage.getItem("keys")) {
        storage.setItem("keys", {});
    }
}
