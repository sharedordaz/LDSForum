const express = require("express");
const router = require('express').Router();
const path = require('path');

const fs = require('fs');

const jsonparser = express.json();
const urlparser = express.urlencoded({ extended: true });

//const homeString = fs.readFileSync('../view/home.html', 'utf8');

//To manage forms, you hage to use the URLparser to both the HTML container of the form and the function receiver of the form 
router.use("/", urlparser);


router.get("/", (req, res) => {
  //TODO turn Html into a string to make the site dinamic
  //res.send(homeString);
  res.sendFile(path.join(__dirname, '../view/home.html'));
})


router.get('/css/style.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../view/css/style.css'));
})


module.exports = router;

