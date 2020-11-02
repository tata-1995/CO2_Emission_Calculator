
# CO2 Emission Calculator
<!-- TOC -->

- [CO2 Emission Calculator](#co2-emission-calculator)
    - [Supported Versions](#supported-versions)
        - [Node JS](#node-js)
        - [NPM](#npm)
    - [Dev Dependencies](#dev-dependencies)
        - [Command Line Input Parser](#command-line-input-parser)
        - [Unit Test Framework](#unit-test-framework)
    - [Folder Structure](#folder-structure)
        - [Reference Source Data](#reference-source-data)
        - [I/O and Parser](#i/o-and-parser)
        - [Helper Module](#helper-module)
        - [Test Suite](#test-suite)
    - [Build code](#build-code)
    - [Test code](#test-code)
    - [Run Test Suite](#run-test-suite)
    - [Sample Input](#sample-input)
    - [Sample Output](#sample-output)
    - [Challenges](#challenges)
    - [Discrepencies](#discrepencies)
        - [Assumptions](#assumptions)

<!-- /TOC -->

## Supported Versions

### Node JS
node version > v12.16.3

### NPM
npm version > 6.14.4

## Dev Dependencies

### Command Line Input Parser
yargs-parser version > 20.2.3

### Unit Test Framework
mocha version > 8.2.0

## Folder Structure

### Reference Source Data
The source data about the CO2 emitted by each transportation method per passenger per km is maintained in a json format in the following file. This enables one place update for any changes to source data.
source-data file : 'averageCo2EmissionsMap.json'

### I/O and Parser
Management of reading input, parsing the command line arguments and returning output is framed in this file, and so this stands as the entry point of the control.
i/o file: 'co2EmissionCalculator.js'

### Helper Module
The business logic and basic mathematical calculations are defined in this module, making the calculator compatible with any types of input and output formats.
helper: 'co2CalculationHelper.js'

### Test Suite
Unit test cases are developed over 'mocha' framework and test suite is defined with four positive and two negative test cases.
1. should return emitted CO2 amounts with unit-of-distance(positive)
2. should return emitted CO2 amounts with out unit-of-distance(positive)
3. should return emitted CO2 amounts with output-unit(positive)
4. should return emitted CO2 amounts with out output-unit(positive)
5. should return null with out distance(negative)
6. should return null with out mode-of-transportation(negative)

### Build code
npm install

The command internally adds 
1. 'node-modules' folder that has imports of all the dependencies(yargs-parser, mocha) mentioned in package.json
and a 
2. 'package-lock.json' file
to the root directory.

### Test code
$ node co2EmissionCalculator.js  --unit-of-distance=km --distance 15 --transportation-method=medium-diesel-car

Use this command to run the source calculator with single inputs.
### Run Test Suite
npm test

Use this command to run the test suite.
### Sample Input
$ node co2EmissionCalculator.js  --unit-of-distance=km --distance 15 --transportation-method=medium-diesel-car

### Sample Output
Your trip caused 2.6kg of CO2-equivalent.

## Challenges
1. Parse command line arguments given the input with value seperator (' ' or '=')
    Achieved through 'yargs-parser'
2. Read input values which are dynamic in order of the parameters
    Achieved through 'yargs-parser'
3. Manage unit conversions between (kg/g and km/m)
4. Writing unit test cases 
    Achieved through 'mocha'
5. Defining dependencies and install them on build code
    Achieved through 'package.json' and 'npm'
6. Modularizing and time management.
    Achieved through brainstorming and algorithm designing

## Discrepencies
In the the problem statement defintion, at the functional requirements section there are five sample cases mentioned:
case 1:  ./co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km Your trip caused 2.6kg of CO2-equivalent.
case 2:  ./co2-calculator --distance 1800.5 --transportation-method large-petrol-car Your trip caused 507.7kg of CO2-equivalent.
case 3 :  ./co2-calculator --transportation-method train --distance 14500 --unit-of-distance m Your trip caused 87g of CO2-equivalent.
case 4: ./co2-calculator --transportation-method train --distance 14500 --unit-of-distance m --output kg Your trip caused 0.1kg of CO2-equivalent.
case 5: ./co2-calculator --unit-of-distance=km --distance 15 --transportation-method=medium-diesel-car  Your trip caused 2.6kg of CO2-equivalent.

In case 1 and case 4 both, the input string doesnot mention about the output unit expected, but the output in case 1 is in 'kg' and in case 4 it is in 'g', also there is no any information provided on what should be the default unit for output.
### Assumptions
The co2EmissionCalculator defined here assumes default unit of output to be 'kg'.