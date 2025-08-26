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
let prestigeRequirement = 10000;
let prestigeCount = 0;
let prestigeText = document.getElementById("prestige-count")

let spcText = document.getElementById("spc-text")
let spsText = document.getElementById("sps-text")


let spc = 1;

let sps = 0;

function incrementStrength() {
    strength.innerHTML = Math.round(parsedStrength += spc);
}

function buyDrink() {

    parsedStrength = Math.round(parsedStrength * 100) / 100;

    if (parsedStrength >= parsedClickerCost) {
        parsedStrength -= parsedClickerCost;
        strength.innerHTML = Math.round(parsedStrength);

        drinklevel.innerHTML++;

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2));
        drinkIncrease.innerHTML = parsedClickerIncrease;

        spc += parsedClickerIncrease;

        parsedClickerCost *= 1.30;
        ClickerCost.innerHTML = Math.round(parsedClickerCost);
    }
}

function buyProteinBar() {

    parsedStrength = Math.round(parsedStrength * 100) / 100;

    if (parsedStrength >= parsedProteinBarCost) {
        parsedStrength -= parsedProteinBarCost;
        strength.innerHTML = Math.round(parsedStrength);

        proteinbarlevel.innerHTML++;

        parsedProteinBarIncrease = parseFloat((parsedProteinBarIncrease * 1.03).toFixed(2));
        proteinbarIncrease.innerHTML = parsedProteinBarIncrease;

        sps += parsedProteinBarIncrease;

        parsedProteinBarCost *= 1.30;
        ProteinBarCost.innerHTML = Math.round(parsedProteinBarCost);
    }
}

function buyPreWorkout() {

    parsedStrength = Math.round(parsedStrength * 100) / 100;

    if (parsedStrength >= parsedPreWorkoutCost) {
        parsedStrength -= parsedPreWorkoutCost;
        strength.innerHTML = Math.round(parsedStrength);

        PreWorkoutlevel.innerHTML++;

        parsedPreWorkoutIncrease = parseFloat((parsedPreWorkoutIncrease * 1.03).toFixed(2));
        PreWorkoutIncrease.innerHTML = parsedPreWorkoutIncrease;

        sps += parsedPreWorkoutIncrease;

        parsedPreWorkoutCost *= 1.30;
        PreWorkoutCost.innerHTML = Math.round(parsedPreWorkoutCost);
    }
}

function buyCreatine() {

    parsedStrength = Math.round(parsedStrength * 100) / 100;

    if (parsedStrength >= parsedCreatineCost) {
        parsedStrength -= parsedCreatineCost;
        strength.innerHTML = Math.round(parsedStrength);

        Creatinelevel.innerHTML++;

        parsedCreatineIncrease = parseFloat((parsedCreatineIncrease * 1.03).toFixed(2));
        CreatineIncrease.innerHTML = parsedCreatineIncrease;

        sps += parsedCreatineIncrease;

        parsedCreatineCost *= 1.30;
        CreatineCost.innerHTML = Math.round(parsedCreatineCost);
    }
}

function buyPersonalTrainer() {
    
    parsedStrength = Math.round(parsedStrength * 100) / 100;

    if (parsedStrength >= parsedPersonalTrainerCost) {
        parsedStrength -= parsedPersonalTrainerCost;
        strength.innerHTML = Math.round(parsedStrength);

        PersonalTrainerlevel.innerHTML++;

        parsedPersonalTrainerIncrease = parseFloat((parsedPersonalTrainerIncrease * 1.03).toFixed(2));
        PersonalTrainerIncrease.innerHTML = parsedPersonalTrainerIncrease;

        sps += parsedPersonalTrainerIncrease;

        parsedPersonalTrainerCost *= 1.30;
        PersonalTrainerCost.innerHTML = Math.round(parsedPersonalTrainerCost);
    }

}

function prestige() {
    if (parsedStrength >= prestigeRequirement) {
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

        ClickerCost.innerHTML = 10;
        ProteinBarCost.innerHTML = 130;
        PreWorkoutCost.innerHTML = 850;
        CreatineCost.innerHTML = 3350;
        PersonalTrainerCost.innerHTML = 10000;

        parsedClickerCost = 10;
        parsedProteinBarCost = 130;
        parsedPreWorkoutCost = 850;
        parsedCreatineCost = 3350;
        parsedPersonalTrainerCost = 10000;

        parsedClickerIncrease = 1;
        drinkIncrease.innerHTML = parsedClickerIncrease;

        parsedProteinBarIncrease = 2;
        proteinbarIncrease.innerHTML = parsedProteinBarIncrease;

        parsedPreWorkoutIncrease = 6;
        PreWorkoutIncrease.innerHTML = parsedPreWorkoutIncrease;

        parsedCreatineIncrease = 20;
        CreatineIncrease.innerHTML = parsedCreatineIncrease;

        parsedPersonalTrainerIncrease = 50;
        PersonalTrainerIncrease.innerHTML = parsedPersonalTrainerIncrease;

        prestigeRequirement = Math.round(prestigeRequirement * 1.5)

        alert(`You prestiged! SPC increased to ${prestigeMultiplier.toFixed(2)}. 
        Next prestige requires ${prestigeRequirement} strength.`);
    } else {
        alert(`You need ${prestigeRequirement} strength to prestige!`)
    }

    strength.innerHTML = Math.round(parsedStrength);
    spcText.innerHTML = Math.round(spc);
    spsText.innerHTML = Math.round(sps);
    prestigeText.innerHTML = prestigeCount;
}

setInterval(() => {
    parsedStrength += sps / 10
    parsedStrength = Math.round(parsedStrength * 100) / 100;
    strength.innerHTML = Math.round(parsedStrength)
    spcText.innerHTML = Math.round(spc)
    spsText.innerHTML = Math.round(sps);
    prestigeText.innerHTML = prestigeCount;
}, 100)