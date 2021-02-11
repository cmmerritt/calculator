//  grab DOM elements

// set event listeners on each button, do math, and update DOM



const firstAddNumberInput = document.getElementById('first-add-number');
const secondAddNumberInput = document.getElementById('second-add-number');
const additionDisplay = document.getElementById('addition-display');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', () => {
    additionDisplay.textContent = Number(firstAddNumberInput.value) + Number(secondAddNumberInput.value);
});

const firstSubNumberInput = document.getElementById('first-sub-number');
const secondSubNumberInput = document.getElementById('second-sub-number');
const subDisplay = document.getElementById('sub-display');
const subButton = document.getElementById('sub-button');

subButton.addEventListener('click', () => {
    subDisplay.textContent = Number(firstSubNumberInput.value) - Number(secondSubNumberInput.value);
});

const firstMultNumberInput = document.getElementById('first-mult-number');
const secondMultNumberInput = document.getElementById('second-mult-number');
const multDisplay = document.getElementById('mult-display');
const multButton = document.getElementById('mult-button');

multButton.addEventListener('click', () => {
    multDisplay.textContent = Number(firstMultNumberInput.value) * Number(secondMultNumberInput.value);
});

const firstDivNumberInput = document.getElementById('first-div-number');
const secondDivNumberInput = document.getElementById('second-div-number');
const divDisplay = document.getElementById('div-display');
const divButton = document.getElementById('div-button');

divButton.addEventListener('click', () => {
    divDisplay.textContent = Number(firstDivNumberInput.value) / Number(secondDivNumberInput.value);
});