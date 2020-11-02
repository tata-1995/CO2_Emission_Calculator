var averageCo2Emissions = require( './averageCo2EmissionsMap.json');

/**
 * Module to calculate the amount of CO2 emitted
 * @param {object} readings
 * @returns {object} result readings
 */
function calculateEmittedCo2(readings) {
	var resultReadings = {};
	var defaultOutputUnit = 'kg';
	var distanceTravelled = null;
	var co2Emitted = null;
	var defaultUnitOfDistance = 'km';
	
	if(readings.hasOwnProperty('distance')) {
		if(readings.hasOwnProperty('unitOfDistance')) {
			if(readings.unitOfDistance == defaultUnitOfDistance) {
				distanceTravelled = readings.distance
			} else {
				distanceTravelled = readings.distance / 1000
			}
		} else {
			distanceTravelled = readings.distance
		}
	}else {
		return null;
	}
		
	if(readings.hasOwnProperty('transportationMethod')) {
		co2Emitted = (averageCo2Emissions[readings.transportationMethod] * distanceTravelled)/1000;
		resultReadings.co2Emitted = co2Emitted.toFixed(1);
		resultReadings.outputUnit = defaultOutputUnit;
	} else {
		return null;
	}

	if(readings.hasOwnProperty('output')) {
		if(readings.output == defaultOutputUnit) {
			resultReadings.co2Emitted = co2Emitted.toFixed(1);
			resultReadings.outputUnit = defaultOutputUnit;
		}else {
			resultReadings.co2Emitted = (co2Emitted*1000).toFixed(1);
			resultReadings.outputUnit = readings.output;
		}
	}
	
	return resultReadings;
}

module.exports = {
        calculateEmittedCo2: calculateEmittedCo2
};