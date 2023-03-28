import UI_ELEMENTS from "./uiElements.mjs";
import ComunicatiomManager from "./comunicationManager.mjs";
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

const {API_ENDPOINTS, USER_ENDPOINT} = apiEndpoints;

class CesarChipherApp{

    static #instance;
    #msg;
    #shiftValue;
    #secretId;

    constructor(authUI){

        

        if(!CesarChipherApp.#instance){
            CesarChipherApp.#instance = this;
            this.authUI = authUI;

            const headers = new Headers()
            if(headers.get("auth-token") == undefined){
                this.authUI.classList.remove("hidden");
            } else{
                this.authUI.classList.add("hidden");
            }
        }
        
        return CesarChipherApp.#instance
    }

    static get instance() {
        return new CesarChipherApp();
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

    async submit(){
       await  ComunicatiomManager.send(`${API_ENDPOINTS.base}${API_ENDPOINTS.encrypt.endpoint}`, {msg:this.#msg, shift:this.#shiftValue})
       onSubmit(); //As the saveBtn doesn't work with code as currently written, onSubmit is put here so it gets called
    }

    async decrypt(){
        await ComunicatiomManager.send(`${API_ENDPOINTS.base}${API_ENDPOINTS.decrypt.endpoint}/${this.#secretId}`, { shift:this.#shiftValue})
    }

    async authenticate(email){
        const token = await  ComunicatiomManager.send(`${USER_ENDPOINT.base}${USER_ENDPOINT.create.endpoint}`, {msg:this.#msg, shift:this.#shiftValue});
        console.log(token);
    }

}

const authUI = document.getElementById("authenticateUI");
const app = new CesarChipherApp(authUI);

authUI.querySelector("#userAuthButton").onclick = async (e) => {
    const inputElement = e.target.parentNode.querySelector("#userEmail");
    CesarChipherApp.instance.authenticate(inputElement.value)
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
        "strength": strengthScore, "strength modifier": strengthBonus, "strength saving throw": null,
        "dexterity": dexterityScore, "dexterity modifier": dexterityBonus, "dexterity saving throw": null,
        "constitution": constitutionScore, "constitution modifier": constitutionBonus, "constitution saving throw": null,
        "intelligence": intelligenceScore, "intelligence modifier": intelligenceBonus, "intelligence saving throw": null,
        "wisdom": wisdomScore, "wisdom modifier": wisdomBonus, "wisdom saving throw": null,
        "charisma": charismaScore, "charisma modifier": charismaBonus, "charisma saving throw": null,
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
    await ComunicatiomManager.send(`${API_ENDPOINTS.base}${API_ENDPOINTS.encrypt.endpoint}`, {stringifySheet}); //Sends the stringified character sheet to database.
}
document.getElementById(saveButton).onclick = onSubmit;

async function onUserSubmission (e) {
    CesarChipherApp.instance.message = document.getElementById(UI_ELEMENTS.contentElementId).value;
    CesarChipherApp.instance.shift = document.getElementById(UI_ELEMENTS.shiftElementId).value;
    await CesarChipherApp.instance.submit();
}
document.getElementById(UI_ELEMENTS.submitButtonElementId).onclick = onUserSubmission;

document.getElementById(UI_ELEMENTS.decryptButtonElementId).onclick = async (e)=>{
    CesarChipherApp.instance.shift = document.getElementById(UI_ELEMENTS.shiftElementId).value;
    CesarChipherApp.instance.secretId = document.getElementById(UI_ELEMENTS.secreteElementId).value;
    await CesarChipherApp.instance.decrypt()

};