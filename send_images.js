function removeDuplicates(sources) {
	sources.sort();
	var new_array = [];
	for(var i = 0; i < sources.length - 1; ++i) {
		if(sources[i] != sources[i + 1]) {
			new_array.push(sources[i]);
		}
	}
	new_array.push(sources[sources.length - 1]);
	return new_array;
}


function links() {
	var links = document.getElementsByTagName('img');
	var sources = [];
	for(var i = 0; i < links.length; ++i) {
		sources.push(links[i].src);
	}

	return removeDuplicates(sources);
	
}

chrome.extension.sendRequest(links());
