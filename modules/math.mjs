import { sheetInfo, profBonusContainer, abilityScores, abilityModifiers } from ".../getElementById.mjs";

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
//Charisma
let charismaSaveThrow;

div = document.createElement("div");
    div.innerHTML = "<h5>" + charismaSaveThrow + "</h5>";
charismaSaveTotal.appendChild(div);


/*---- Skills ----*/



/*---- EXPORT ----*/
export const scores = { currentProfBonus,
    strengthScore, strengthBonus, dexterityScore, dexterityBonus, constitutionScore, constitutionBonus,
    intelligenceScore, intelligenceBonus, wisdomScore, wisdomBonus, charismaScore, charismaBonus
}