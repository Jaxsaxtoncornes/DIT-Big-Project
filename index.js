import { powerUpIntervals, upgrades } from "./constants/upgrades.js";
import { defaultSkillValues, defaultUpgradeValues } from "./constants/defaultValues.js";

let strength = document.querySelector(".strength");
let parsedStrength = parseFloat(strength.innerHTMl);

let spcText = document.getElementById("spc-text");
let spsText = document.getElementById("sps-text");

let strengthImgContainer = document.querySelector(".strength-img-container");

let upgradesNavButton = document.getElementById("upgrade-nav-button");
let skillsNavButton = document.getElementById("skills-nav-button");
let artifactsNavButton = document.getElementById("artifacts-nav-button");