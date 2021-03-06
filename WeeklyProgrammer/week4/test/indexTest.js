const Chai = require('Chai');
Chai.should();

const oot = require('../src/index');

describe('String processing module', () => {
	it('should exist', () => oot.should.be.an('object'));

	describe('findRecurrance', () => {
		it('should exist', () => oot.findRecurrance.should.be.a('function'));
		it('should return a string', () => oot.findRecurrance('abcd').should.be.a('string'));
		it('should return empty string when there is no recurrance', () => oot.findRecurrance('abcd').should.equal(''));
		it('should return a recurring character', () => oot.findRecurrance('abcda').should.equal('a'));
		it('should return the first recurring character', () => oot.findRecurrance('abcdab').should.equal('a'));

		//Challenge inputs
		it('should handle challenge input 1', () => oot.findRecurrance('the quick brown fox jumps over the lazy dog').should.equal(' '));
		it('should handle challenge input 2', () => oot.findRecurrance('IKEUNFUVFV').should.equal('U'));
		it('should handle challenge input 3', () => oot.findRecurrance('PXLJOUDJVZGQHLBHGXIW').should.equal('J'));
		it('should handle challenge input 4', () => oot.findRecurrance('*l1J?)yn%R[}9~1"=k7]9;0[$').should.equal('1'));
		it('should handle challenge input 5', () => oot.findRecurrance('156248267293222').should.equal('2'));
		it('should handle challenge input 6', () => oot.findRecurrance('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz').should.equal(''));
	});

	describe('findGap', () => {
		it('should exist', () => oot.findGap.should.be.a('function'));
		it('should return a string', () => oot.findGap('abcd').should.be.a('string'));

		it('should return empty string when there is no recurrance', () => oot.findGap('abcd').should.equal(''));
		it('should return a gap character', () => oot.findGap('abcda').should.equal('a'));
		it('should return the longest gapped character', () => oot.findGap('abcbda').should.equal('a'));

		//Challenge inputs
		
		it('should handle challenge input 1', () => oot.findGap('the quick brown fox jumps over the lazy dog').should.equal('t'));
		it('should handle challenge input 2', () => oot.findGap('IKEUNFUVFV').should.equal('U'));
		it('should handle challenge input 3', () => oot.findGap('PXLJOUDJVZGQHLBHGXIW').should.equal('X'));
		it('should handle challenge input 4', () => oot.findGap('*l1J?)yn%R[}9~1"=k7]9;0[$').should.equal('['));
		it('should handle challenge input 5', () => oot.findGap('156248267293222').should.equal('6'));
		it('should handle challenge input 6', () => oot.findGap('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz').should.equal(''));
	});
});