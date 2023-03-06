# Omni AI

Stop copy-pasting your AI api-keys, use Omni.


## How?
Omni is designed both for developers and consumers. As a consumer you can install the Omni Plugin into your browser and use it to store your API keys. As a developer you use the Omni API to access easily request access to those keys.

## Why?
There are plenty apps in the world that make use of GPT3 or ChatGPT, most of them now require the user to provide their own keys to access those features, that can be tedious, omni aims to solve that problem.

## How to use?
Omni is designed to be as easy to use as possible, you can install the Omni Plugin into your browser and use it to store your API keys. As a developer you use the Omni API to access easily request access to those keys.
### As a consumer
1. Install the Omni Plugin
2. Go to plugin settings and add your API keys
3. Now, when you visit a website that uses Omni, you will be able to use the features that require API keys.

### As a developer

1. Add the api to your website

Download `script.js` from the repository, for now this is just a placeholder, but in the future it will be a script that will be hosted on a CDN.

Import the script into your website

```html
<script src="./script.js"></script>
```

2. Add the following code to your website

```js
document.getElementById('requestKey').addEventListener('click', () => {
    requestKey("openai", (key) => console.log(key));
});
```

Where the `requestKey` element is a button that the user will click to request the key. This must be a button because of the user interaction. If you know a better way to do this, please let me know.

The `requestKey` function takes two arguments, the first one is the name of the API you want to access, the second one is a callback function that will be called when the user accepts the request. The callback function will be called with the key as an argument.

## Roadmap
- [x] Create a basic plugin
- [x] Create a basic API
- [ ] Improve UI of plugin
- [ ] Create better access to API
