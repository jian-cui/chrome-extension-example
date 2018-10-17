chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  var containers = $('td.team > a');
  if (request.cmd == 'team') {
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
  if (request.cmd == 'player') {
    var containers = $('.teammates_list tr.stat_list');
    var obj = [];
    for (var i = 0;i < containers.length; i++) {
      var td = containers.eq(i).find('td')[2];
      var url = td.getElementsByTagName('img')[0].src;
      var name = td.getElementsByTagName('span')[0].textContent;
      obj.push({
        url: url,
        text: name
      })
    }
    sendResponse(obj);
  }
});
