import { createCountsString } from '../utils.js';

const test = QUnit.test;

test('this function should return a string describing the current state of variables currentPopulation, currentElevation, currentWeather', (expect) => {
    const expected = 'The population of Devland has changed 3 times.\nThe elevation of Devland has changed 7 times.\nThe weather in Devland has changed 13 times.';
    const actual = createCountsString(3, 7, 13);

    expect.equal(actual, expected, 'this tests that the function returns the correct string concatenated with the value of the input arguments');
});
