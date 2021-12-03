// import functions and grab DOM elements
const density = document.getElementById('density');
const elevation = document.getElementById('elevation');
const weather = document.getElementById('weather');

const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

const structure1 = document.getElementById('structure1');
const structure2 = document.getElementById('structure2');
const structure3 = document.getElementById('structure3');
const triangle1 = document.getElementById('triangle1');
const triangle2 = document.getElementById('triangle2');
const triangle3 = document.getElementById('triangle3');
const weather1 = document.getElementById('weather1');
const weather2 = document.getElementById('weather2');
const weather3 = document.getElementById('weather3');

const citySlogan = document.getElementById('city-slogan');
const populationStats = document.getElementById('population-stats');
const elevationStats = document.getElementById('elevation-stats');
const weatherStats = document.getElementById('weather-stats');


console.log(density,
elevation,
weather,
sloganInput,
sloganButton,
structure1,
structure2,
structure3,
triangle1,
triangle2,
triangle3,
weather1,
weather2,
weather3,
citySlogan,
populationStats,
elevationStats,
weatherStats);

// let state
let sloganArray = [];
let currentPopulation = 0;
let currentElevation = 0;
let currentWeather = 0;

// set event listeners 
density.addEventListener('change', () => {
  let id = density.value;
});

elevation.addEventListener('change', () => {

});

weather.addEventListener('change', () => {

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
