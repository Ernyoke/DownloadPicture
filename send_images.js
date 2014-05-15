function removeDuplicates(sources) {
	sources.sort();
	var new_array = [];
	for(var i = 0; i < sources.length - 1; ++i) {
		console.log(sources[i]);
		if(sources[i] != sources[i + 1]) {
			new_array.push(sources[i]);
		}
		else {
			//console.log(sources[i]);
		}
	}
	var i = sources.length - 1;
	if(true) {
		new_array.push(sources[i]);
	}
	for(var i = 0; i < new_array.length; ++i) {
		console.log(new_array[i]);
	}
	return new_array;
}


function links() {
	var links = document.getElementsByTagName('img');
	var sources = [];
	for(var i = 0; i < links.length; ++i) {
		sources.push(links[i].src);
		//console.log(links[i].src);
	}

	return removeDuplicates(sources);
	
}

chrome.extension.sendRequest(links());
