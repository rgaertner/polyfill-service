// Array.prototype.reduce
Array.prototype.reduce = function reduce(callback, initialValue) {
	var array = this, length = array.length, index = 0, previousValue;

	while (index < length && !(index in array)) {
		++index;
	}

	previousValue = 2 in arguments ? initialValue : array[index];

	for (++index; index < length; ++index) {
		if (index in array) {
			previousValue = callback(previousValue, array[index], index, array);
		}
	}

	return previousValue;
};
