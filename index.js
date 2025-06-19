let strength = document.querySelector('.strength-cost')
let parsedStrength = parseFloat(strength.innerHTML)

let ClickerCost = document.querySelector('.drink-cost')
let parsedClickerCost = parseFloat(ClickerCost.innerHTML)
let drinklevel = document.querySelector('.drink-level')
let drinkIncrease = document.querySelector('.drink-increase')
let parsedClickerIncrease = parseFloat(drinkIncrease.innerHTML)

let spc = 1;

function incrementStrength() {
    strength.innerHTML = Math.round(parsedStrength += spc);
}

function buyDrink() {
if (parsedStrength >= parsedClickerCost) {
    parsedStrength -= parsedClickerCost
    strength.innerHTML = parsedStrength;

    drinklevel.innerHTML ++

    parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2));
    drinkIncrease.innerHTML = parsedClickerIncrease;

    spc += parsedClickerIncrease;
    }
}