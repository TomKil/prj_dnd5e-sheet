

let langNoBtn = document.getElementById("langNoBtn");
let langEnBtn = document.getElementById("langEnBtn");

/*-----------------------------------------------------------------------------------------*/

    langNoBtn.addEventListener('click', function(evt) {
        console.log("Switched to norwegian");
        //Switch to fetching language module "no.json"
    });   
    langEnBtn.addEventListener('click', function(evt) {
        console.log("Switched to english");
        //Switch to fetching language module "en.json"
    });