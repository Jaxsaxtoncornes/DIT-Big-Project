let strength = document.querySelector('.strength-cost')
let parsedstrength = parseFloat(strength.innerHTML)

let ClickerCost = document.querySelector('.drink-cost')
let parsedClickerCost = parseFloat(ClickerCost.innerHTML)
let drinklevel = document.querySelector('.drink-level')
let drinkIncrease = document.querySelector('.drink-increase')
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let spc = 1;

function incrementStrength() {
    parsedstrength += spc;
    strength.innerHTML = parsedstrength;
}

function buyDrink() {
    if (parsedstrength >= parsedClickerCost) {
    parsedstrength -= parsedClickerCost
    strength.innerHTML = parsedstrength;

    drinklevel.innerHTML ++

    parsedClickerIncrease = parsedClickerIncrease * 1.03
    clickerIncrease.innerHTML = parsedClickerIncrease
    spc += parsedClickerIncrease
    }
}