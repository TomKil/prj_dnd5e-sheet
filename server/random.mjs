import express from "express";
const router = new express.Router();

router.get("/nummer", function(req, res, next){
    const number = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
    res.send(number);
});

router.get("/strig", function(req, res, next){
    const rndString = (Math.random() * 500).toString(16);
});



export default router;