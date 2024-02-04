# Learnings

## Manifest.json

In the `manifest.json` file, you need to add a `content_scripts` field with the following fields inside it:

```json
{
    ...,
    "content_scripts": [{
        "matches": ["http://*/*", "https://*/*"],
        "js": ["content_script.js"],
        "css": ["contentStyle.css"]
    }]
}
```

The `matches` field is used to specify the URLs that the content script will be injected into. We used the wildcard `*` to match all the URLs.

The `js` field is used to specify our content script files.

The `css` field is used to specify our content style files.

---

## The tutorial that was followed
[Chrome Extension Tutorial: Content Scripts EXPLAINED](https://www.youtube.com/watch?v=i2Z_nKRgDyU)
