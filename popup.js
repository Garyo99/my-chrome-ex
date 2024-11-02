document.addEventListener("DOMContentLoaded", () => {
  const redirectWasedaToggle = document.getElementById("redirect-waseda");

  chrome.storage.sync.get("redirectEnabled", (data) => {
    redirectWasedaToggle.checked = data.redirectEnabled || false;
  });

  redirectWasedaToggle.addEventListener("change", () => {
    chrome.storage.sync.set({ redirectEnabled: redirectWasedaToggle.checked });
  });
});
