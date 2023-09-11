function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let low = 0;
	let high = array.length;
	let check;

	for (let i = 0; i < 5; i++) {
		check = (high - low) / 2;
		let a = Math.ceil(check);

		let b = low + a;
		console.log(b);
		
		if(searchTerm > array[b]) {
			low = a;
		} else if(searchTerm < array[b]) {
			high = a;
		} else {
			check = a;
			break;
		}
	}
	return check;
}

module.exports = binarySearch;