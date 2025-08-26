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

loadGame();

function updateSPC_SPS() {
    spc = 1 * prestigeMultiplier + parsedClickerIncrease * parseInt(drinklevel.innerHTML)
    sps = parsedProteinBarIncrease * parseInt(proteinbarlevel.innerHTML)
        + parsedPreWorkoutIncrease * parseInt(PreWorkoutlevel.innerHTML)
        + parsedCreatineIncrease * parseInt(Creatinelevel.innerHTML)
        + parsedPersonalTrainerIncrease * parseInt(PersonalTrainerlevel.innerHTML);
}

function incrementStrength() {
    updateSPC_SPS();
    parsedStrength += spc;
    strength.innerHTML = Math.round(parsedStrength);
    spcText.innerHTML = Math.round(spc);
    spsText.innerHTML = Math.round(sps);
}

function buyDrink() {

    parsedStrength = Math.round(parsedStrength * 100) / 100;

    if (parsedStrength >= parsedClickerCost) {
        parsedStrength -= parsedClickerCost;
        strength.innerHTML = Math.round(parsedStrength);

        drinklevel.innerHTML++;

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2));
        drinkIncrease.innerHTML = parsedClickerIncrease;

        updateSPC_SPS();

        spcText.innerHTML = Math.round(spc);
        spsText.innerHTML = Math.round(sps);

        parsedClickerCost = Math.round(parsedClickerCost * 1.3);
        ClickerCost.innerHTML = parsedClickerCost;
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

        updateSPC_SPS();

        spcText.innerHTML = Math.round(spc);
        spsText.innerHTML = Math.round(sps);

        parsedProteinBarCost = Math.round(parsedProteinBarCost * 1.3);
        ProteinBarCost.innerHTML = parsedProteinBarCost;
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

        updateSPC_SPS();

        spcText.innerHTML = Math.round(spc);
        spsText.innerHTML = Math.round(sps);

        parsedPreWorkoutCost = Math.round(parsedPreWorkoutCost * 1.3);
        PreWorkoutCost.innerHTML = parsedPreWorkoutCost;
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

        updateSPC_SPS();

        spcText.innerHTML = Math.round(spc);
        spsText.innerHTML = Math.round(sps);

        parsedCreatineCost = Math.round(parsedCreatineCost * 1.3);
        CreatineCost.innerHTML = parsedCreatineCost;
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

        updateSPC_SPS();

        spcText.innerHTML = Math.round(spc);
        spsText.innerHTML = Math.round(sps);

        parsedPersonalTrainerCost = Math.round(parsedPersonalTrainerCost * 1.3);
        PersonalTrainerCost.innerHTML = parsedPersonalTrainerCost;
    }

}

function prestige() {
    if (parsedStrength >= prestigeRequirement) {
        prestigeCount++;
        prestigeMultiplier += 0.1 / Math.sqrt(prestigeCount);
        parsedStrength = 0;

        drinklevel.innerHTML = 0;
        proteinbarlevel.innerHTML = 0;
        PreWorkoutlevel.innerHTML = 0;
        Creatinelevel.innerHTML = 0;
        PersonalTrainerlevel.innerHTML = 0;

        parsedClickerCost = 10;
        parsedProteinBarCost = 130;
        parsedPreWorkoutCost = 850;
        parsedCreatineCost = 3350;
        parsedPersonalTrainerCost = 10000;

        ClickerCost.innerHTML = parsedClickerCost;
        ProteinBarCost.innerHTML = parsedProteinBarCost;
        PreWorkoutCost.innerHTML = parsedPreWorkoutCost;
        CreatineCost.innerHTML = parsedCreatineCost;
        PersonalTrainerCost.innerHTML = parsedPersonalTrainerCost;

        parsedClickerIncrease = 1;
        parsedProteinBarIncrease = 2;
        parsedPreWorkoutIncrease = 6;
        parsedCreatineIncrease = 20;
        parsedPersonalTrainerIncrease = 50;

        drinkIncrease.innerHTML = parsedClickerIncrease;
        proteinbarIncrease.innerHTML = parsedProteinBarIncrease;
        PreWorkoutIncrease.innerHTML = parsedPreWorkoutIncrease;
        CreatineIncrease.innerHTML = parsedCreatineIncrease;
        PersonalTrainerIncrease.innerHTML = parsedPersonalTrainerIncrease;

        updateSPC_SPS();

        strength.innerHTML = Math.round(parsedStrength);
        spcText.innerHTML = Math.round(spc);
        spsText.innerHTML = Math.round(sps);
        prestigeText.innerHTML = prestigeCount;

        prestigeRequirement = Math.round(prestigeRequirement * 1.5);

        alert(`You prestiged! SPC increased to ${prestigeMultiplier.toFixed(2)}. 
Next prestige requires ${prestigeRequirement} strength.`);
    } else {
        alert(`You need ${prestigeRequirement} strength to prestige!`);
    }

    strength.innerHTML = Math.round(parsedStrength);
    spcText.innerHTML = Math.round(spc);
    spsText.innerHTML = Math.round(sps);
    prestigeText.innerHTML = prestigeCount;
}

function saveGame() {
    const gameData = {
        strength : parsedStrength,
        prestige: prestigeMultiplier,
        prestigeCount: prestigeCount,
        prestigeRequirement: prestigeRequirement,
        drinklevel: parseInt(drinklevel.innerHTML),
        proteinbarlevel: parseInt(proteinbarlevel.innerHTML),
        preWorkoutlevel: parseInt(PreWorkoutlevel.innerHTML),
        creatinelevel: parseInt(Creatinelevel),
        personalTrainerLevel: parseInt(PersonalTrainerlevel.innerHTML),
        clickerCost: parsedClickerCost,
        proteinBarCost: parsedProteinBarCost,
        preWorkoutCost: parsedPreWorkoutCost,
        creatineCost: parsedCreatineCost,
        personalTrainerCost: parsedPersonalTrainerCost
    };
    localStorage.setItem("combatClickerSave", JSON.stringify(gameData));
}

function loadGame() {
    const savedData = JSON.parse(localStorage.getItem("combatClickerSave"));
    if (savedData) {
        parsedStrength = savedData.strength;
        prestigeMultiplier = savedData.prestige;
        prestigeCount = savedData.prestigeCount;
        prestigeRequirement = savedData.prestigeRequirement;

        drinklevel.innerHTML = savedData.drinklevel;
        proteinbarlevel.innerHTML = savedData.proteinbarlevel;
        PreWorkoutlevel.innerHTML = savedData.preWorkoutlevel;
        Creatinelevel.innerHTML = savedData.creatinelevel;
        PersonalTrainerlevel.innerHTML = savedData.personalTrainerLevel;

        parsedClickerCost = savedData.clickerCost;
        parsedProteinBarCost = savedData.proteinBarCost;
        parsedPreWorkoutCost = savedData.preWorkoutCost;
        parsedCreatineCost = savedData.creatineCost;
        parsedPersonalTrainerCost = savedData.personalTrainerCost;

        strength.innerHTML = parsedStrength.toFixed(2);
        ClickerCost.innerHTML = parsedClickerCost;
        ProteinBarCost.innerHTML = parsedProteinBarCost;
        PreWorkoutCost.innerHTML = parsedPreWorkoutCost;
        CreatineCost.innerHTML = parsedCreatineCost;
        PersonalTrainerCost.innerHTML = parsedPersonalTrainerCost;

        spcText.innerHTML = spc.toFixed(2);
        spsText.innerHTML = sps.toFixed(2);
        prestigeText.innerHTML = prestigeCount;
    }
}

function resetSave() {
    localStorage.removeItem("combatClickerSave");
    alert("Save reset! The page will reload.");
    location.reload();
}


setInterval(() => {
    updateSPC_SPS();
    parsedStrength += sps / 10

    strength.innerHTML = parsedStrength.toFixed(2);
    spcText.innerHTML = spc.toFixed(2);
    spsText.innerHTML = sps.toFixed(2);
    prestigeText.innerHTML = prestigeCount;
}, 100)

setInterval(saveGame, 10000);