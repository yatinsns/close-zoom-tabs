document.getElementById("closeZoomTabs").addEventListener("click", () => {
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        if (tab.url.includes("zoom.us")) {
          chrome.tabs.remove(tab.id);
        }
      });
    });
  });
  