function linearSearch(array, searchTerm) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */

	let i;
	for (let j = 0; j < array.length; j++) {
		if(searchTerm == array[j]) {
			i = j;
			break;
		}
	}

	return i;
}

module.exports = linearSearch;
