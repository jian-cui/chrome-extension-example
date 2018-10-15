chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var containers = $('td.team > a');
  if (request.cmd == 'imgs') {
    var containers = $('td.team > a');
    var obj = [];
    for (var i = 0; i < containers.length; i++) {
      var container = containers.get(i);
      obj.push({
        url: container.getElementsByTagName('img')[0].src,
        text: container.textContent.trim()
      })
    }
    // sendResponse(obj);
    // console.log(obj[0])
    sendResponse(obj);
  }
});
