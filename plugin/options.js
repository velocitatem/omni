function saveOptions(e) {
    e.preventDefault();
    let source = document.querySelector("#source").value;
    let key = document.querySelector("#key").value;
    let data = {
        [source]: key
    }
    console.log(data);
    browser.storage.local.set(data);
}

function restoreOptions() {
    function setCurrentChoice(result) {
        // get all the items in storage
        browser.storage.local.get().then((result) => {
            // add to the ul under #existing
            let ul = document.querySelector("#existing");
            // also add a button to remove the item
            for (let key in result) {
                let li = document.createElement("li");
                li.textContent = key + ": " + result[key];
                let button = document.createElement("button");
                button.textContent = "Remove";
                button.addEventListener("click", () => {
                    browser.storage.local.remove(key);
                    li.remove();
                });
                li.appendChild(button);
                ul.appendChild(li);
            }
        });
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    let getting = browser.storage.local.get("color");
    getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
