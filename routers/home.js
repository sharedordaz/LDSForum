const express = require("express");
const router = require('express').Router();
const path = require('path');

const jsonparser = express.json();
const urlparser = express.urlencoded({ extended: true });

//To manage forms, you hage to use the URLparser to both the HTML container of the form and the function receiver of the form 
router.use("/", urlparser);


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../view/home.html'));
})


router.get('/css/style.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../view/css/style.css'));
})


module.exports = router;
/*router.use('/', express.json());
router.use('/', express.urlencoded({extended: true}));
router.use('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
})*/
