const _ = require('lodash')

const stringProcessor = {
	findRecurrance: (input) => {
		const letters = [];
		for (let letter of input) {
			if (letters.includes(letter)) return letter;
			letters.push(letter);
		}
		return '';
	},

	findGap: (input) => {
		const letters = {};

		//Get indexes
		for (let i = 0; i < input.length; i++) {
			let letter = input[i];

			if(!Object.keys(letters).includes(letter)) {
				letters[letter] = {
					letter: letter,
					instances: [],
					gap: 0
				};
			}
			letters[letter].instances.push(i);
			
		}
	
		//Reduce
		_.keys(letters).forEach((item) => {
			let value = letters[item].instances;
			let maxGap = value.reduce((val, item, index) => {
				//calculate current gap
				let gap = item - (value[index-1]);
				if (gap > val) {
					return gap;
				} else {
					return val;
				}
			}, 0);
			letters[item].gap = maxGap;
		})

		const winner = _.orderBy(letters, (item) => item.gap, 'desc')[0];
		if (winner.gap <= 0) return '';
		return winner.letter;
	}
}

module.exports = stringProcessor;