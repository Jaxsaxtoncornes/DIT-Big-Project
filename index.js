let strength = document.querySelector('.strength-cost') // hey
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

let PreWorkoutCost = document.querySelector('.preworkout-cost')
let parsedPreWorkoutCost = parseFloat(PreWorkoutCost.innerHTML)
let PreWorkoutlevel = document.querySelector('.preworkout-level')
let PreWorkoutIncrease = document.querySelector('.preworkout-increase')
let parsedPreWorkoutIncrease = parseFloat(PreWorkoutIncrease.innerHTML)

let CreatineCost = document.querySelector('.creatine-cost')
let parsedCreatineCost = parseFloat(CreatineCost.innerHTML)
let Creatinelevel = document.querySelector('.creatine-level')
let CreatineIncrease = document.querySelector('.creatine-increase')
let parsedCreatineIncrease = parseFloat(CreatineIncrease.innerHTML)

let PersonalTrainerCost = document.querySelector('.personaltrainer-cost')
let parsedPersonalTrainerCost = parseFloat(PersonalTrainerCost.innerHTML)
let PersonalTrainerlevel = document.querySelector('.personaltrainer-level')
let PersonalTrainerIncrease = document.querySelector('.personaltrainer-increase')
let parsedPersonalTrainerIncrease = parseFloat(PersonalTrainerIncrease.innerHTML)

let prestigeMultiplier = 1;
let prestigeRequirment = 10000;
let prestige = 0;

let spcText = document.getElementById("spc-text")
let spsText = document.getElementById("sps-text")


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

function buyPreWorkout() {
    if (parsedStrength >= parsedPreWorkoutCost ) {
        strength.innerHTML = Math.round(parsedStrength -= parsedPreWorkoutCost);

        PreWorkoutlevel.innerHTML ++

        parsedPreWorkoutIncrease = parseFloat((parsedPreWorkoutIncrease * 1.03).toFixed(2));
        PreWorkoutIncrease.innerHTML = parsedPreWorkoutIncrease;

        sps += parsedPreWorkoutIncrease;

        parsedPreWorkoutCost *= 1.30;
        PreWorkoutCost.innerHTML = Math.round(parsedPreWorkoutCost)
        }
}

function buyCreatine() {
    if (parsedStrength >= parsedCreatineCost ) {
        strength.innerHTML = Math.round(parsedStrength -= parsedCreatineCost);

        Creatinelevel.innerHTML ++

        parsedCreatineIncrease = parseFloat((parsedCreatineIncrease * 1.03).toFixed(2));
        CreatineIncrease.innerHTML = parsedCreatineIncrease;

        sps += parsedCreatineIncrease;

        parsedCreatineCost *= 1.30;
        CreatineCost.innerHTML = Math.round(parsedCreatineCost)
        }
}

function buyPersonalTrainer() {
    if (parsedStrength >= parsedPersonalTrainerCost ) {
        strength.innerHTML = Math.round(parsedStrength -= parsedPersonalTrainerCost);

        PersonalTrainerlevel.innerHTML ++

        parsedPersonalTrainerIncrease = parseFloat((parsedPersonalTrainerIncrease * 1.03).toFixed(2));
        PersonalTrainerIncrease.innerHTML = parsedPersonalTrainerIncrease;

        sps += parsedPersonalTrainerIncrease;

        parsedPersonalTrainerCost *= 1.30;
        PersonalTrainerCost.innerHTML = Math.round(parsedPersonalTrainerCost)
        }
}

function prestige() {
    if (parsedStrength >= prestigeRequirment) {
        prestigeCount++;
        prestigeMultiplier += 0.1 /Math.sqrt(prestigeCount);
        parsedStrength = 0;
        spc = 1 * prestigeMultiplier;
        sps = 0;

        drinklevel.innerHTML = 0;
        proteinbarlevel.innerHTML = 0;
        PreWorkoutlevel.innerHTML = 0;
        Creatinelevel.innerHTML = 0;
        PersonalTrainerlevel.innerHTML = 0;

        ClickerCost.innerHTML = 0;
        ProteinBarCost.innerHTML = 0;
        PreWorkoutCost.innerHTML = 0;
        CreatineCost.innerHTML = 0;
        PersonalTrainerCost.innerHTML = 0;

        prestigeRequirment = Math.round(prestigeRequirment * 1.5)

        alert(`You prestiged! SPC increased to ${prestigeMultiplier.toFixed(2)}. 
        Next prestige requires ${prestigeRequirement} strength.`);
    } else {
        alert(`You need ${prestigeRequirment} strength to prestige!`)
    }
}

setInterval(() => {
    parsedStrength += sps / 10
    strength.innerHTML = Math.round(parsedStrength)
    spcText.innerHTML = Math.round(spc)
    spsText.innerHTML = Math.round(sps);
    prestigeText.innerHTML = prestigeCount;
}, 100)