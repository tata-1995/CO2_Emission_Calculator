const assert = require('assert')
const co2CalculationHelpers = require('./co2CalculationHelpers.js')
it('should return emitted CO2 amounts with unit-of-distance', () => {
    var readings = {"transportationMethod": "medium-diesel-car", "distance": 15,  "unitOfDistance": "km"};
    var resultReadings = {"co2Emitted": "2.6", "outputUnit": "kg"};
    assert.deepStrictEqual(co2CalculationHelpers.calculateEmittedCo2(readings), resultReadings)
})
it('should return emitted CO2 amounts with out unit-of-distance', () => {
    var readings = {"distance": 1800.5, "transportationMethod": "large-petrol-car"};
    var resultReadings = {"co2Emitted": "507.7", "outputUnit": "kg"};
    assert.deepStrictEqual(co2CalculationHelpers.calculateEmittedCo2(readings), resultReadings)
})
it('should return emitted CO2 amounts with output-unit', () => {
    var readings = {"transportationMethod": "train", "distance": 14500, "unitOfDistance": "m", "output":"kg"};
    var resultReadings = {"co2Emitted": "0.1", "outputUnit": "kg"};
    assert.deepStrictEqual(co2CalculationHelpers.calculateEmittedCo2(readings), resultReadings)
})
it('should return emitted CO2 amounts with out output-unit', () => {
    var readings = {"unitOfDistance": "km", "distance": 15, "transportationMethod": "medium-diesel-car"};
    var resultReadings = {"co2Emitted": "2.6", "outputUnit": "kg"};
    assert.deepStrictEqual(co2CalculationHelpers.calculateEmittedCo2(readings), resultReadings)
})
it('should return null with out distance', () => {
    var readings = {"transportationMethod": "large-petrol-car", "unitOfDistance": "km", "output":"kg"};
    var resultReadings = {"co2Emitted": "507.7", "outputUnit": "kg"};
    assert.notDeepStrictEqual(co2CalculationHelpers.calculateEmittedCo2(readings), resultReadings)
})
it('should return null with out mode-of-transportation', () => {
    var readings = {"distance": 1800.5, "unitOfDistance": "km", "output":"kg"};
    var resultReadings = {"co2Emitted": "507.7", "outputUnit": "kg"};
    assert.notDeepStrictEqual(co2CalculationHelpers.calculateEmittedCo2(readings), resultReadings)
})