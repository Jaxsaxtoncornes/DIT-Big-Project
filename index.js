let strength = document.querySelector('.strength-cost')
let parsedStrength = parseFloat(strength.innerHTML)

let ClickerCost = document.querySelector('.drink-cost')
let parsedClickerCost = parseFloat(ClickerCost.innerHTML)
let drinklevel = document.querySelector('.drink-level')
let drinkIncrease = document.querySelector('.drink-increase')
let parsedClickerIncrease = parseFloat(drinkIncrease.innerHTML)

let ProteinBarCost = document.querySelector('.proteinbar-cost')
let parsedProteinBarCost = parseFloat(ProteinBarCost.innerHTML)
let proteinbarlevel = document.querySelector('.proteinbar-level')
let proteinbarIncrease = document.querySelector('.proteinbar-increase')
let parsedProteinBarIncrease = parseFloat(proteinbarIncrease.innerHTML)

let spc = 1;

let sps = 0;

function incrementStrength() {
    strength.innerHTML = Math.round(parsedStrength += spc);
}

function buyDrink() {
if (parsedStrength >= parsedClickerCost) {
    strength.innerHTML = Math.round(parsedStrength -= parsedClickerCost);

    drinklevel.innerHTML ++

    parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2));
    drinkIncrease.innerHTML = parsedClickerIncrease;

    spc += parsedClickerIncrease;

    parsedClickerCost *= 1.30;
    ClickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}

function buyProteinBar() {
if (parsedStrength >= parsedProteinBarCost) {
    strength.innerHTML = Math.round(parsedStrength -= parsedProteinBarCost);

    proteinbarlevel.innerHTML ++

    parsedProteinBarIncrease = parseFloat((parsedProteinBarIncrease * 1.03).toFixed(2));
    proteinbarIncrease.innerHTML = parsedProteinBarIncrease;

    sps += parsedProteinBarIncrease;

    parsedProteinBarCost *= 1.30;
    ProteinBarCost.innerHTML = Math.round(parsedProteinBarCost)
    }
}

setInterval(() => {
    parsedStrength += sps
    strength.innerHTML = Math.round(parsedStrength)
}, 1000)