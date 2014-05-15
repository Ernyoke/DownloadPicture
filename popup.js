function imageToDownload(src,  chk) {
  this.url = src;
  this.chk = chk;
}

window.onload = function() {

  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
                      function(activeTabs) {
      chrome.tabs.executeScript(
        activeTabs[0].id, {file: 'send_images.js', allFrames: true});
    });
  });
};

var allLinks;
chrome.extension.onRequest.addListener(function(links) {
	allLinks = links;
  showLinks();
});

var buffer = [];
function showLinks() {
	var div = document.getElementById("images");
	for(var i = 0; i < allLinks.length; ++i) {
		var img = document.createElement("img");
		img.src = allLinks[i];
		img.style.width = '50px';

		var br = document.createElement("br");

		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.id = "ck" + i;
		var img_d = new imageToDownload(allLinks[i], "ck" + i);
		buffer.push(img_d);

		div.appendChild(img);
		div.appendChild(checkbox);
		div.appendChild(br);

	}
}

function download() {
	var url;
	var src = "";
	var filename;
	for(var i = 0; i < buffer.length; ++i) {
		var chk = document.getElementById(buffer[i].chk);
		if(chk.checked == true) {
			url = buffer[i].url;
			chrome.downloads.download({ url: url, filename: filename, saveAs: false });
		}
	}

	var w = document.createElement("p");
	var btn=document.createTextNode(src);
	w.appendChild(btn);

	var x =document.getElementById("www");
	x.appendChild(w);


}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('download').addEventListener('click', download);
})