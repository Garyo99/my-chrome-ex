chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ redirectEnabled: true });
  chrome.storage.sync.set({ selectEnabled: true });
});
