import UI_ELEMENTS from "./uiElements.mjs";
import ComunicationManager from "./comunicationManager.mjs";
import apiEndpoints from "./apiEndpoints.mjs";

import miscDivs from "./getElementById.mjs";
import sheetInfo from "./getElementById.mjs";
import abilityScores from "./getElementById.mjs";
import abilityModifiers from "./getElementById.mjs";
import savingThrows from "./getElementById.mjs";
import skills from "./getElementById.mjs";
import generalStats from "./getElementById.mjs";
import personalityTraits from "./getElementById.mjs";
import traitsAndProficiencies from "./getElementById.mjs";
import inventory from "./getElementById.mjs";

import scores from "./math.mjs";

const {API_ENDPOINTS, USER_ENDPOINT} = apiEndpoints;

class infoToDatabase{

    static #instance;
    #msg;
    #shiftValue;
    #secretId;

    constructor(authUI){

        

        if(!infoToDatabase.#instance){
            infoToDatabase.#instance = this;
            this.authUI = authUI;

            const headers = new Headers()
            if(headers.get("auth-token") == undefined){
                this.authUI.classList.remove("hidden");
            } else{
                this.authUI.classList.add("hidden");
            }
        }
        
        return infoToDatabase.#instance
    }

    static get instance() {
        return new infoToDatabase();
    }

    set message(msg){
        this.#msg = msg
        console.log("Message is set to ", msg);
    }

    set shift(shiftValue){
        this.#shiftValue = shiftValue;
        console.log("Shift value set to ", this.shiftValue)
    }

    set secretId(id){
        this.#secretId = id;
        console.log("Secret id is set to", id);
    }

    set charInfo(info){
        this.#charInfo = info;
        console.log(info);
    }

    async submit(){
       onSubmit() //As the saveBtn doesn't work with code as currently written, onSubmit is put here so it gets called
    }

    async authenticate(email){
        const token = await  ComunicationManager.send(`${USER_ENDPOINT.base}${USER_ENDPOINT.create.endpoint}`, {msg:this.#msg, shift:this.#shiftValue});
        console.log(token);
    }

}

const authUI = document.getElementById("authenticateUI");
const app = new infoToDatabase(authUI);

authUI.querySelector("#userAuthButton").onclick = async (e) => {
    const inputElement = e.target.parentNode.querySelector("#userEmail");
    infoToDatabase.instance.authenticate(inputElement.value)
    authenticated();
    if(loginStatus = 2){
        div = document.createElement("div");
        div.innerHTML = "<button id='saveButton'>Save</button>";
        charismaSaveTotal.appendChild(div);
    }
}

let loginStatus;
function authenticated(){
    if (inputElement === "#userEmail"){
        loginStatus = 1;
    }else{
        loginStatus = 2;
    };
};

async function onSubmit(){
    const savedSheet = {
        "player name": playerName, "character name": charName,
        "class": charClass, "level": level, "race": race,
        "background": background, "alignment": alignment, "experience earned": exp,
        "strength": strengthScore, "strength modifier": strengthBonus, "strength saving throw": strengthSaveThrow,
        "dexterity": dexterityScore, "dexterity modifier": dexterityBonus, "dexterity saving throw": dexteritySaveTotal,
        "constitution": constitutionScore, "constitution modifier": constitutionBonus, "constitution saving throw": constitutionSaveTotal,
        "intelligence": intelligenceScore, "intelligence modifier": intelligenceBonus, "intelligence saving throw": intelligenceSaveTotal,
        "wisdom": wisdomScore, "wisdom modifier": wisdomBonus, "wisdom saving throw": wisdomSaveTotal,
        "charisma": charismaScore, "charisma modifier": charismaBonus, "charisma saving throw": charismaSaveTotal,
        "acrobatics": profAcrobatics,
        "animal handling": profAnimalHandling,
        "arcana": profArcana,
        "athletics": profAthletics,
        "deception": profDeception,
        "history": profHistory,
        "insight": profInsight,
        "intimidation": profIntimidation,
        "investigation": profInvestigation,
        "medicine": profMedicine,
        "nature": profNature,
        "perception": profPerception,
        "performance": profPerformance,
        "persuasion": profPersuasion,
        "religion": profReligion,
        "sleight of hand": profSleightOfHand,
        "stealth": profStealth,
        "survival": profSurvival,
        "passive perception": passivePerception,
        "AC": AC, "initiative": initiative, "movement": movement,
        "hit points max": hpMax, "hit dice maximum": hdMax,
        "proficiencies": proficiencies,
        "features and traits": featsAndTraits,
        "personality traits": personality, "ideals": ideals, "bonds": bonds, "flaws": flaws,
        "inventory": inventory
    };
    const stringifySheet = JSON.stringify(savedSheet);
    await ComunicationManager.send(`${API_ENDPOINTS.base}${API_ENDPOINTS.encrypt.endpoint}`, {stringifySheet}); //Sends the stringified character sheet to database.
}
document.getElementById(saveButton).onclick = onSubmit;

async function onUserSubmission (e) {
    infoToDatabase.instance.message = document.getElementById(UI_ELEMENTS.contentElementId).value;
    infoToDatabase.instance.shift = document.getElementById(UI_ELEMENTS.shiftElementId).value;
    await infoToDatabase.instance.submit();
}
document.getElementById(UI_ELEMENTS.submitButtonElementId).onclick = onUserSubmission;

document.getElementById(UI_ELEMENTS.decryptButtonElementId).onclick = async (e)=>{
    infoToDatabase.instance.shift = document.getElementById(UI_ELEMENTS.shiftElementId).value;
    infoToDatabase.instance.secretId = document.getElementById(UI_ELEMENTS.secreteElementId).value;
    await infoToDatabase.instance.decrypt()

};
