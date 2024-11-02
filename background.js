chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ redirectEnabled: true });
});
