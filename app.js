// import functions and grab DOM elements
const density = document.getElementById('density');
const elevation = document.getElementById('elevation');
const weather = document.getElementById('weather');

const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

// const triangle1 = document.getElementById('triangle1');
// const triangle2 = document.getElementById('triangle2');
// const triangle3 = document.getElementById('triangle3');
// const weather1 = document.getElementById('weather1');
// const weather2 = document.getElementById('weather2');
// const weather3 = document.getElementById('weather3');

const citySlogan = document.getElementById('city-slogan');
const populationStats = document.getElementById('population-stats');
const elevationStats = document.getElementById('elevation-stats');
const weatherStats = document.getElementById('weather-stats');

// let state
let sloganArray = [];
let currentPopulation = 0;
let currentElevation = 0;
let currentWeather = 0;

// set event listeners 
density.addEventListener('change', () => {
    let struct = document.getElementById(`structure${density.value}`);
    struct.classList.remove('visibility');
    console.log(struct);
});

elevation.addEventListener('change', () => {
    let elev = document.getElementById(`elevation${elevation.value}`);
    elev.classList.remove('visibility');
    console.log(elev);
});

weather.addEventListener('change', () => {
    let weath = document.getElementById(`weather${weather.value}`);
    weath.classList.remove('visibility');
    console.log(weath);
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
