
chrome.runtime.onStartup.addListener(() => {

    // Workaround, uncomment these lines to check.
    // @FIX: Brave bug https://github.com/brave/brave-browser/issues/30785.
    // if (navigator.brave)
    //     chrome.runtime.reload();
});

chrome.runtime.onInstalled.addListener((details) => {

    // Check reload.
    if (details.reason === chrome.runtime.OnInstalledReason.UPDATE && details.previousVersion === chrome.runtime.getManifest().version) {
        console.log("reload");
    }
});
