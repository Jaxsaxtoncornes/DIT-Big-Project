let strength = document.querySelector('.strength-cost')
let parsedStrength = parseFloat(strength.innerHTML)

let ClickerCost = document.querySelector('.drink-cost')
let parsedClickerCost = parseFloat(ClickerCost.innerHTML)
let drinklevel = document.querySelector('.drink-level')
let drinkIncrease = document.querySelector('.drink-increase')
let parsedClickerIncrease = parseFloat(drinkIncrease.innerHTML)

let ProteinBarCost = document.querySelector('.drink-cost')
let parsedProteinBarCost = parseFloat(ProteinBarCost.innerHTML)
let proteinbarlevel = document.querySelector('.drink-level')
let proteinbarIncrease = document.querySelector('.drink-increase')
let parsedProteinBarIncrease = parseFloat(drinkIncrease.innerHTML)

let spc = 1;

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