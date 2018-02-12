const lib = require('./src/index');
const argv = require('yargs')
				.demandCommand(1)
				.argv;
				
console.log(lib.findRecurrance(argv._[0]));