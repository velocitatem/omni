// register the listeners only after the page is ready


let src = window

src.addEventListener("omni-get-api-key", function(param) {
    console.log("omni-get-api-key", param);
    let decison = confirm("Application is requesting access to your API key ("+param.detail.source+"). Do you want to allow it?");
    if (decison) {
        let res = browser.storage.local.get(param.detail.source);
        res.then((resultKey)=>{
            window.dispatchEvent(new CustomEvent("process-key", {
                detail: {
                    source: param.detail.source,
                    key: resultKey[param.detail.source],
                }
            }));
        });
    } else {
        window.dispatchEvent(new CustomEvent("process-key", {
            detail: {
                source: param.detail.source,
                key: "denied",
            }
        }));
    }
});

// add an api key to the storage
src.addEventListener("omni-set-api-key", function(param) {
    let source = param.detail.source;
    let key = param.detail.key;
});
