chrome.storage.local.get("downloadUrl", (data) => {
  if (data.downloadUrl) {
    const link = document.getElementById("downloadLink");
    link.href = data.downloadUrl;
  }
});
