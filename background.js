import { SITES } from "./sites.js";

SITES.forEach(function (value, key) {
  chrome.contextMenus.create({
    id: key,
    title: value.get("title"),
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  const siteInfo = SITES.get(info.menuItemId);
  const url = siteInfo.get("url").replace("%s", info.selectionText);
  chrome.tabs.create({
    url: url,
  });
});
