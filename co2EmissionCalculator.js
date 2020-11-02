var parser = require( 'yargs-parser')
var args = process.argv.slice(2).join(' '); // Read Command Line Arguments

var co2CalculationHelpers = require( './co2CalculationHelpers.js');
const readings = parser(args) // Parse Input Arguments
var resultReadings = co2CalculationHelpers.calculateEmittedCo2(readings); 

console.log('Your trip caused ' + resultReadings.co2Emitted + resultReadings.outputUnit + ' of CO2-equivalent.');