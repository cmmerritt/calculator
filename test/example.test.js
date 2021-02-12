// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../utilities.js';
const testAdd = QUnit.test;

testAdd('time to test add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 4;
    const y = 5;
    const sum = 9;

    
    //Act 
    // Call the function you're testing and set the result to a const
    const result = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(result, sum);

});

import { subtract } from '../utilities.js';
const testSubtract = QUnit.test;

testSubtract('time to test subtract function', (expect) => {
    const x = 5;
    const y = 2;
    const subtracted = 3;

    const result = subtract(x, y);

    expect.equal(result, subtracted);

})

import { multiply } from '../utilities.js';
const testMultiply = QUnit.test;

testMultiply('time to test multiply function', (expect) => {
    const x = 5;
    const y = 2;
    const multiplied = 10;

    const result = multiply(x, y);

    expect.equal(result, multiplied);
})

import { divide } from '../utilities.js';
const testDivide = QUnit.test;

testDivide('time to test divide function', (expect) => {
    const x = 6;
    const y = 2;
    const divided = 3;

    const result = divide(x, y);

    expect.equal(result, divided);
})

