import { sheetInfo, abilityScores, abilityModifiers, savingThrows, skills } from ".../getElementById.mjs";

/*---- Proficiency Bonus ----*/
let profBonuses = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];
let profBonusI = level.value;
let currentProfBonus = profBonuses[profBonusI];

let div = document.createElement("div");
    div.innerHTML = "<h4>" + currentProfBonus + "</h4>";
profBonusContainer.appendChild(div);


/*---- Ability Score Modifier----*/
//Strength
let strengthBonus;
if(strengthScore >= 10){
    strengthBonus = Math.floor((strengthScore-10)/2);
};
if(strengthScore <= 10){
    strengthBonus = -1 //FINN MATTEN TIL DETTE
};
if(strengthScore = 10){
    strengthBonus = 0;
};

div = document.createElement("div");
    div.innerHTML = "<h4>" + strengthBonus + "</h4>";
strengthMod.appendChild(div);
//Dexterity
let dexterityBonus;
if(dexterityScore >= 10){
    dexterityBonus = Math.floor((dexterityScore-10)/2);
};
if(dexterityScore <= 10){
    dexterityBonus = -1 //FINN MATTEN TIL DETTE
};
if(dexterityScore = 10){
    dexterityBonus = 0;
};

div = document.createElement("div");
    div.innerHTML = "<h4>" + dexterityBonus + "</h4>";
dexterityMod.appendChild(div);
//Constitution
let constitutionBonus;
if(constitutionScore >= 10){
    constitutionBonus = Math.floor((constitutionScore-10)/2);
};
if(constitutionScore <= 10){
    constitutionBonus = -1 //FINN MATTEN TIL DETTE
};
if(constitutionScore = 10){
    constitutionBonus = 0;
};

div = document.createElement("div");
    div.innerHTML = "<h4>" + constitutionBonus + "</h4>";
constitutionMod.appendChild(div);
//Intelligence
let intelligenceBonus;
if(intelligenceScore >= 10){
    intelligenceBonus = Math.floor((intelligenceScore-10)/2);
};
if(intelligenceScore <= 10){
    intelligenceBonus = -1 //FINN MATTEN TIL DETTE
};
if(intelligenceScore = 10){
    intelligenceBonus = 0;
};

div = document.createElement("div");
    div.innerHTML = "<h4>" + intelligenceBonus + "</h4>";
intelligenceMod.appendChild(div);
//Wisdom
let wisdomBonus;
if(wisdomScore >= 10){
    wisdomBonus = Math.floor((wisdomScore-10)/2);
};
if(wisdomScore <= 10){
    wisdomBonus = -1 //FINN MATTEN TIL DETTE
};
if(wisdomScore = 10){
    wisdomBonus = 0;
};

div = document.createElement("div");
    div.innerHTML = "<h4>" + wisdomBonus + "</h4>";
wisdomMod.appendChild(div);
//Charisma
let charismaBonus;
if(charismaScore >= 10){
    charismaBonus = Math.floor((charismaScore-10)/2);
};
if(charismaScore <= 10){
    charismaBonus = -1 //FINN MATTEN TIL DETTE
};
if(charismaScore = 10){
    charismaBonus = 0;
};

div = document.createElement("div");
    div.innerHTML = "<h4>" + charismaBonus + "</h4>";
charismaMod.appendChild(div);


/*---- Saving Throws----*/
//Strength
let strengthSaveTotal;

if(strengthSave === true){
    strengthSaveTotal = strengthBonus + currentProfBonus;
}else{
    strengthSaveTotal = strengthBonus;
}

div = document.createElement("div");
    div.innerHTML = "<h5>" + strengthSaveTotal + "</h5>";
strengthSaveBox.appendChild(div);

//Dexterity
let dexteritySaveTotal;

if(dexteritySave === true){
    dexteritySaveTotal = dexterityBonus + currentProfBonus;
}else{
    dexteritySaveTotal = dexterityBonus;
}

div = document.createElement("div");
    div.innerHTML = "<h5>" + dexteritySaveTotal + "</h5>";
dexteritySaveBox.appendChild(div);

//Constitution
let constitutionSaveTotal;

if(constitutionSave === true){
    constitutionSaveTotal = constitutionBonus + currentProfBonus;
}else{
    constitutionSaveTotal = constitutionBonus;
}

div = document.createElement("div");
    div.innerHTML = "<h5>" + constitutionSaveTotal + "</h5>";
constitutionSaveBox.appendChild(div);

//Intelligence
let intelligenceSaveTotal;

if(intelligenceSave === true){
    intelligenceSaveTotal = intelligenceBonus + currentProfBonus;
}else{
    intelligenceSaveTotal = intelligenceBonus;
}

div = document.createElement("div");
    div.innerHTML = "<h5>" + intelligenceSaveTotal + "</h5>";
intelligenceSaveBox.appendChild(div);

//Wisdom
let wisdomSaveTotal;

if(wisdomSave === true){
    wisdomSaveTotal = wisdomBonus + currentProfBonus;
}else{
    wisdomSaveTotal = wisdomBonus;
}

div = document.createElement("div");
    div.innerHTML = "<h5>" + wisdomSaveTotal + "</h5>";
wisdomSaveBox.appendChild(div);

//Charisma
let charismaSaveTotal;

if(charismaSave === true){
    charismaSaveTotal = charismaBonus + currentProfBonus;
}else{
    charismaSaveTotal = charismaBonus;
}

div = document.createElement("div");
    div.innerHTML = "<h5>" + charismaSaveTotal + "</h5>";
charismaSaveBox.appendChild(div);


/*---- Skills ----*/
let acrobaticsTotal;
if(profAcrobatics === true){
    acrobaticsTotal = dexterityBonus + currentProfBonus;
}else{
    acrobaticsTotal = dexterityBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + acrobaticsTotal + "</h5>";
acrobaticsBox.appendChild(div);

let animalHandlingTotal;
if(profAnimalHandling === true){
    animalHandlingTotal = wisdomBonus + currentProfBonus;
}else{
    animalHandlingTotal = wisdomBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + animalHandlingTotal + "</h5>";
animalHandlingBox.appendChild(div);

let arcanaTotal;
if(profAcrobatics === true){
    arcanaTotal = intelligenceBonus + currentProfBonus;
}else{
    arcanaTotal = intelligenceBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + arcanaTotal + "</h5>";
arcanaBox.appendChild(div);

let athleticsTotal;
if(profAthletics === true){
    athleticsTotal = strengthBonus + currentProfBonus;
}else{
    athleticsTotal = strengthBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + athleticsTotal + "</h5>";
athleticsBox.appendChild(div);

let deceptionTotal;
if(profDeception === true){
    deceptionTotal = charismaBonus + currentProfBonus;
}else{
    deceptionTotal = charismaBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + deceptionTotal + "</h5>";
deceptionBox.appendChild(div);

let historyTotal;
if(profHistory === true){
    historyTotal = intelligenceBonus + currentProfBonus;
}else{
    historyTotal = intelligenceBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + historyTotal + "</h5>";
historyBox.appendChild(div);

let insightTotal;
if(profInsight === true){
    insightTotal = wisdomBonus + currentProfBonus;
}else{
    insightTotal = wisdomBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + insightTotal + "</h5>";
insightBox.appendChild(div);

let intimidationTotal;
if(profIntimidation === true){
    intimidationTotal = charismaBonus + currentProfBonus;
}else{
    intimidationTotal = charismaBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + intimidationTotal + "</h5>";
intimidationBox.appendChild(div);

let investigationTotal;
if(profInvestigation === true){
    investigationTotal = intelligenceBonus + currentProfBonus;
}else{
    investigationTotal = intelligenceBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + investigationTotal + "</h5>";
investigationBox.appendChild(div);

let medicineTotal;
if(profMedicine === true){
    medicineTotal = wisdomBonus + currentProfBonus;
}else{
    medicineTotal = wisdomBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + medicineTotal + "</h5>";
medicineBox.appendChild(div);

let natureTotal;
if(profNature === true){
    natureTotal = intelligenceBonus + currentProfBonus;
}else{
    natureTotal = intelligenceBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + natureTotal + "</h5>";
natureBox.appendChild(div);

let perceptionTotal;
if(profPerception === true){
    perceptionTotal = wisdomBonus + currentProfBonus;
}else{
    perceptionTotal = wisdomBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + perceptionTotal + "</h5>";
perceptionBox.appendChild(div);

let performanceTotal;
if(profPerformance === true){
    performanceTotal = charismaBonus + currentProfBonus;
}else{
    performanceTotal = charismaBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + performanceTotal + "</h5>";
performanceBox.appendChild(div);

let persuasionTotal;
if(profPersuasion === true){
    persuasionTotal = charismaBonus + currentProfBonus;
}else{
    persuasionTotal = charismaBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + persuasionTotal + "</h5>";
persuasionBox.appendChild(div);

let religionTotal;
if(profReligion === true){
    religionTotal = intelligenceBonus + currentProfBonus;
}else{
    religionTotal = intelligenceBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + religionTotal + "</h5>";
religionBox.appendChild(div);

let sleightOfHandTotal;
if(profSleightOfHand === true){
    sleightOfHandTotal = dexterityBonus + currentProfBonus;
}else{
    sleightOfHandTotal = dexterityBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + sleightOfHandTotal + "</h5>";
sleightOfHandBox.appendChild(div);

let stealthTotal;
if(profStealth === true){
    stealthTotal = dexterityBonus + currentProfBonus;
}else{
    stealthTotal = dexterityBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + stealthTotal + "</h5>";
stealthBox.appendChild(div);

let survivalTotal;
if(profSurvival === true){
    survivalTotal = wisdomBonus + currentProfBonus;
}else{
    survivalTotal = wisdomBonus;
}
div = document.createElement("div");
    div.innerHTML = "<h5>" + survivalTotal + "</h5>";
survivalBox.appendChild(div);




/*---- EXPORT ----*/
export const scores = { currentProfBonus,
    strengthScore, strengthBonus, dexterityScore, dexterityBonus, constitutionScore, constitutionBonus,
    intelligenceScore, intelligenceBonus, wisdomScore, wisdomBonus, charismaScore, charismaBonus,
    strengthSaveTotal, dexteritySaveTotal, constitutionSaveTotal, intelligenceSaveTotal, wisdomSaveTotal, charismaSaveTotal,
    acrobaticsTotal, animalHandlingTotal, arcanaTotal, athleticsTotal, deceptionTotal, historyTotal, insightTotal, intimidationTotal,
    investigationTotal, medicineTotal, natureTotal, perceptionTotal, performanceTotal, persuasionTotal, religionTotal,
    sleightOfHandTotal, stealthTotal, survivalTotal };
