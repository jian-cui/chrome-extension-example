var $text = $('#text');
var gResponse = '';

function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
      if (callback) callback(response);
    });
  });
}

$('button').on('click', function () {
  sendMessageToContentScript({
    cmd: 'imgs'
  }, function (response) {
    $text.text(response.length)
    for (var i = 0; i < response.length; i++) {
      var url = response[i].url;
      var text = response[i].text + '.png';
      $text.append(`<div>${url}, ${text}</div>`)
      download(response[i].url, response[i].text + '.png');
    }
  });
})

function download(url, name) {
  chrome.downloads.download({
    url: url,
    filename: name,
    saveAs: false
  });
}

// function _download(i) {
//   if (i >= repsonse.length) return;
//   var url = response[i].url;
//   var name = response[i].text + '.png';
//   chrome.downloads,download({
//     url: url,
//     filename: name,
//     saveAs: false
//   }, function() {
//     download(i + 1);
//   })
// }