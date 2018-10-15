chrome.runtime.onInstalled.addListener(function(){
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
      chrome.declarativeContent.onPageChanged.addRules([
          {
              conditions: [
                  // 只有打开百度才显示pageAction
                  new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'www.dongqiudi.com/data'}})
              ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
          }
      ]);
  });
});