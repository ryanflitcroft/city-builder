import { createCountsString } from '../utils.js';

const test = QUnit.test;

test('this function should return a string describing the current state of variables currentPopulation, currentElevation, currentWeather', (expect) => {
    const expected = 'The population of Devland has changed 3 times.\nThe elevation of Devland has changed 7 times.\nThe weather in Devland has changed 13 times.';
    const actual = createCountsString(3, 7, 13);

    const expected2 = 'string';
    const actual2 = createCountsString(4, 3, 92);

    const expected3 = true;
    const actual3 = createCountsString(4, 3, 92);

    expect.equal(actual, expected, 'this tests that the function returns the correct string concatenated with the value of the input arguments');
    expect.equal(typeof actual2, expected2, 'this tests that the return value of the function is the typeof string');
    expect.equal(actual3.includes(4, 3, 92), expected3, 'this tests that the return value of the function includes the arguments passed');
});
