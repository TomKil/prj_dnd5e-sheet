

let langNoBtn = document.getElementById("langNoBtn");
let langEnBtn = document.getElementById("langEnBtn");

/*-----------------------------------------------------------------------------------------*/

    langNoBtn.addEventListener('click', function(evt) {
        console.log("Switched to norwegian");
        //Fetching language module "no.json"
        språk = "no.json"
    });   
    langEnBtn.addEventListener('click', function(evt) {
        console.log("Switched to english");
        //Fetching language module "en.json"
        språk = "en.json"
    });