const lib = require('./src/index');
const argv = require('yargs')
				.demandCommand(1)
				.argv;

const input = argv._[0];
console.log(`First reoccurance: ${lib.findRecurrance(input)}.  Longest gap: ${lib.findGap(input)}`);