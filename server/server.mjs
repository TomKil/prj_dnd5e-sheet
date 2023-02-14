import express from "express";
import {router as randomRouter} from ".../random.mjs";

const port = (process.env.PORT || 8080);
server.set('port', port);

server.use(express.static('public'));

server.post("/fact", storeANewFact)
server.delete("/fact/:index",deleteFact);
server.delete("/facts",deleteAllFacts);

let facts = ["A beard second is the avrage lenght of beard groth on a physesist in 1 second (about 4nm"]

// ------------ Route Handlers --------------------------------------
function deleteFact(req,res,next){

    const indexFromClient = request.params.index;
    
    if(indexFromClient !== undefined && indexFromClient < facts.length ){
       facts.splice(factIndex,1);
       res.status(200);
    }else{
        res.status(404);
    } 
    res.end();
    next();
}

function storeANewFact(req,res,next){
    const newFact = req.body;
    console.log("New fact recived : " + newFact);
    facts.push(newFact);
    res.status(200).end();
    next();
}


function retriveFact(request,respons,next){
    const indexFromClient = request.params.index;
    let factIndex = Math.floor(Math.random() * facts.length -1) +1;

    if(indexFromClient !== undefined && indexFromClient < facts.length ){
       factIndex = indexFromClient;
    } 

    respons.send(facts[factIndex]);
}

function deleteAllFacts(...stuff){
    facts = [];
    stuff[1].status(200).end();
}

server.listen(server.get('port'), function () {
    console.log('server running', server.get('port'));
});