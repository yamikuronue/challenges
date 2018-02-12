const stringProcessor = {
	findRecurrance: (input) => {
		const letters = [];
		for (let letter of input) {
			if (letters.includes(letter)) return letter;
			letters.push(letter);
		}
		return '';
	}
}

module.exports = stringProcessor;