# Documentation for Developers

Once you have imported the script:

```html
<script src="https://cdn.jsdelivr.net/gh/velocitatem/omni@main/script.js" type="text/javascript"></script>
```

You can use the `requestKey` function to get the key from the plugin.

```js
requestKey("SOURCE", callback);
```

The `SOURCE` is the source of the key. The `callback` is the function that will be called when the key is received.

Options for `SOURCE`:
+ `openai` - OpenAI API Key

The `callback` function will be called with the key as the first argument.

```js
callback = (key) => {
    // Do something with the key
    // send it to the server, etc.
}
```

The `key` can take the following values, based on the users choice:
+ `denied` - The user denied the request for the key
+ `undefined` - The user does not have the plugin installed or the key is not set

And that should cover it :)
