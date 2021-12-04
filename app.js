import { createCountsString } from './utils.js';

const density = document.getElementById('density');
const elevation = document.getElementById('elevation');
const weather = document.getElementById('weather');

const sloganInput = document.getElementById('slogan-input');
const sloganButton = document.getElementById('slogan-button');

const statistics = document.getElementById('statistics');

const citySlogan = document.getElementById('city-slogan');

let sloganArray = [];
let currentPopulation = 0;
let currentElevation = 0;
let currentWeather = 0;

density.addEventListener('change', () => {
    currentPopulation++;
    addStructure();
    let struct = document.getElementById(`structure${density.value}`);
    struct.classList.remove('visibility');
    displayStats();
});

elevation.addEventListener('change', () => {
    currentElevation++;
    addElevation();
    let elev = document.getElementById(`elevation${elevation.value}`);
    elev.classList.remove('visibility');
    displayStats();
});

weather.addEventListener('change', () => {
    currentWeather++;
    addWeather();
    let forecast = document.getElementById(`weather${weather.value}`);
    forecast.classList.remove('visibility');
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

function addStructure() {
    let remove1 = document.getElementById('structure1');
    let remove2 = document.getElementById('structure2');
    let remove3 = document.getElementById('structure3');
    remove1.classList.add('visibility');
    remove2.classList.add('visibility');
    remove3.classList.add('visibility');
}
function addElevation() {
    let remove1 = document.getElementById('elevation1');
    let remove2 = document.getElementById('elevation2');
    let remove3 = document.getElementById('elevation3');
    remove1.classList.add('visibility');
    remove2.classList.add('visibility');
    remove3.classList.add('visibility');
}
function addWeather() {
    let remove1 = document.getElementById('weather1');
    let remove2 = document.getElementById('weather2');
    let remove3 = document.getElementById('weather3');
    remove1.classList.add('visibility');
    remove2.classList.add('visibility');
    remove3.classList.add('visibility');
}