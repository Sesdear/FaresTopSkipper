chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    try {
      const url = new URL(details.url);
      if (url.hostname.includes("shrinkme.io") && url.pathname.startsWith("/st")) {
        const target = url.searchParams.get("url");
        if (target) {
          chrome.storage.local.set({ downloadUrl: decodeURIComponent(target) });
        }
      }
    } catch (e) {
      console.error("Ошибка обработки запроса:", e);
    }
  },
  { urls: ["*://shrinkme.io/st*"], types: ["main_frame"] }
);
