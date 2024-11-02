chrome.storage.sync.get("redirectEnabled", (data) => {
  if (data.redirectEnabled) {
    const redirectRules = [
      {
        match: "https://wsdmoodle.waseda.jp/",
        redirectTo: "https://wsdmoodle.waseda.jp/my/",
      },
      // 以下でルールを追加
      // {
      //   match: "https://oh-haewon.com/",
      //   redirectTo: "https://oh-haewon.com/best"
      // }
    ];

    redirectRules.forEach((rule) => {
      if (window.location.href === rule.match) {
        window.location.href = rule.redirectTo;
      }
    });
  }
});
