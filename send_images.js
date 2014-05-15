function links() {
	var links = document.getElementsByTagName('img');
	var sources = [];
	for(var i = 0; i < links.length; ++i) {
		sources.push(links[i].src);
	}

	return sources;
	
}

chrome.extension.sendRequest(links());
