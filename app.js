import { createCountsString } from './utils.js';

const density = document.getElementById('density');
const elevation = document.getElementById('elevation');
const weather = document.getElementById('weather');

const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

console.log(sloganInput, sloganButton);

const statistics = document.getElementById('statistics');

const citySlogan = document.getElementById('city-slogan');
const populationStats = document.getElementById('population-stats');
const elevationStats = document.getElementById('elevation-stats');
const weatherStats = document.getElementById('weather-stats');


let sloganArray = [];
let currentPopulation = 0;
let currentElevation = 0;
let currentWeather = 0;

density.addEventListener('change', () => {
    currentPopulation++;
    console.log(currentPopulation);
    let struct = document.getElementById(`structure${density.value}`);
    struct.classList.remove('visibility');
    displayStats();
});

elevation.addEventListener('change', () => {
    currentElevation++;
    let elev = document.getElementById(`elevation${elevation.value}`);
    elev.classList.remove('visibility');
    displayStats();
});

weather.addEventListener('change', () => {
    currentWeather++;
    let weath = document.getElementById(`weather${weather.value}`);
    weath.classList.remove('visibility');
    displayStats();
});

sloganButton.addEventListener('click', () => {
    let newSlogan = sloganInput.value;
    sloganArray.push(newSlogan);
    sloganInput.value = '';
    citySlogan.textContent = '';
    displaySlogans();
});

function displayStats() {
    statistics.textContent = '';
    let p = document.createElement('p');
    statistics.append(p);
    const statsCount = createCountsString(currentPopulation, currentElevation, currentWeather);
    p.textContent = statsCount;
}

function displaySlogans() {
    for (let slogan of sloganArray) {
        let p = document.createElement('p');
        citySlogan.append(p);
        p.textContent = slogan;
    }
}