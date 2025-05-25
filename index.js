let strength = document.querySelector('.strength-cost')
let parsedstrength = parseFloat(strength.innerHTML)

let ClickerCost = document.querySelector('.drink-cost')
let parsedClickerCost = parseFloat(ClickerCost.innerHTML)

function incrementStrength() {
    parsedstrength += 1
    strength.innerHTML = parsedstrength
}

function buyDrink() {
    if (parsedstrength >= parsedClickerCost) {
    parsedstrength -= parsedClickerCost
    strength.innerHTML = parsedstrength
    }
}