# Omni AI

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

You can also follow [this setup guide](./SETUP.md)

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

![Powered By Omni](https://img.shields.io/static/v1?label=Powered%20By&style=social&message=Omni&color=green&logo=data:image/png;base64,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)




## Roadmap 🛣️
- [x] Create a basic plugin
- [x] Create a basic API
- [ ] Improve UI of plugin
- [ ] Create better access to API
