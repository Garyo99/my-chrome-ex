document.addEventListener("DOMContentLoaded", () => {
  const redirectWasedaToggle = document.getElementById("redirect-waseda");
  const selectGaishishukatsuToggle = document.getElementById(
    "select-gaishishukatsu"
  );

  chrome.storage.sync.get("redirectEnabled", (data) => {
    redirectWasedaToggle.checked = data.redirectEnabled || false;
  });

  chrome.storage.sync.get("selectEnabled", (data) => {
    selectGaishishukatsuToggle.checked = data.selectEnabled || false;
  });

  redirectWasedaToggle.addEventListener("change", () => {
    chrome.storage.sync.set({ redirectEnabled: redirectWasedaToggle.checked });
  });

  selectGaishishukatsuToggle.addEventListener("change", () => {
    chrome.storage.sync.set({
      selectEnabled: selectGaishishukatsuToggle.checked,
    });
  });
});
