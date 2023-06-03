# Brave Browser DNR issue

This is a minimal reproductable example of the following `Brave Browser`  issue. https://github.com/brave/brave-browser/issues/30785.

## To reproduce

1. Activate developer mode in the Brave extensions panel.
2. Load the extension by dragging the folder onto the extensions page.
3. Restart Brave.
4. Open the extension worker service devtools.
5. Type the following.
    ```JS
    await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [ 1337 ] })
    console.log("I'm a hacker.")
    ```

## Expected result

"I'm a hacker"

## Actual result

Promise will never be resolved or rejected.
