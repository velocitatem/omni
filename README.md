# Omni AI (beta)

_currently only for firefox_

Stop copy-pasting your AI api-keys, use Omni.

## How ❓
Omni is designed both for developers and consumers. As a consumer you can install the Omni Plugin into your browser and use it to store your API keys. As a developer you use the Omni API to access easily request access to those keys.

Take a look at this in action here:

https://user-images.githubusercontent.com/60182044/223773599-f026e7ad-4ac7-4a7b-b34e-b4f70eb97445.mp4

## Why ❓
There are plenty apps in the world that make use of GPT3 or ChatGPT, most of them now require the user to provide their own keys to access those features, that can be tedious, omni aims to solve that problem.

## How to use ❓
Omni is designed to be as easy to use as possible, you can install the Omni Plugin into your browser and use it to store your API keys. As a developer you use the Omni API to access easily request access to those keys.
### As a consumer 🔌
1. Install the [Omni Plugin](https://addons.mozilla.org/en-US/firefox/addon/omniai/)
2. Go to plugin settings and add your API keys
3. Now, when you visit a website that uses Omni, you will be able to use the features that require API keys.

You can also follow [this setup guide](./SETUP.md). You can also try it out on this website: https://omni-ai.netlify.app/

### As a developer 🧑‍💻

1. Add the api to your website


Import the script into your website

```html
<script src="https://cdn.jsdelivr.net/gh/velocitatem/omni@main/script.js" type="text/javascript"></script>
```

2. Add the following code to your website

```js
document.getElementById('requestKey').addEventListener('click', () => {
    requestKey("openai", (key) => console.log(key));
});
```

Where the `requestKey` element is a button that the user will click to request the key. This must be a button because of the user interaction. If you know a better way to do this, please let me know.

The `requestKey` function takes two arguments, the first one is the name of the API you want to access, the second one is a callback function that will be called when the user accepts the request. The callback function will be called with the key as an argument.

You can find a demo [here](./demo/index.html)

### Streamlit (coming soon)
Streamlit is full of apps that use GPT3, but they all require the user to provide their own API keys, this is a problem, because it is tedious to do that.

As a developer you should add the following code to your app

```python
key=st.text_input("OpenAI API Key", placeholder="omni-[KEY_NAME]")
```

Omni will read the page and if it finds a text input with the placeholder `omni-[KEY_NAME]` it will replace it with the key that the user has stored in Omni.

## On boarding 🛳️
What if a user does not have omni but as a developer you want to use it? Well, you can use the on boarding feature to make it easy for the user to install omni. Here are some resources you can use to make it easy for the user to install omni:

```html
<h3>Install Omni</h3>
<p>Omni is a browser plugin that makes it easy to use AI APIs, install it now to use this app.</p>
<a href="LINK_TO_EXT">Install Omni</a>
```

```python
st.markdown("""
## Install Omni
Omni is a browser plugin that makes it easy to use AI APIs, install it now to use this app.
[Install Omni](LINK_TO_EXT)
""")
```

Here are some badges:
![Omni Plugin](https://img.shields.io/badge/Omni-Plugin-green)





## Contributing 🤝
Any contributions you make are greatly appreciated.

## Roadmap 🛣️
- [x] Create a basic plugin
- [x] Create a basic API
- [x] Improve UI of plugin
- [x] Create better access to API
