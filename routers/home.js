const express = require("express"); 
const router = require('express').Router();
const path = require('path');

const jsonparser = express.json();
const urlparser = express.urlencoded();

const homeForm = require('../controllers/homeForm.js');


//EVERY FILE UPLOADED IS SENDED TO THE SPECIFIC GET REQUEST. 
router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, '../view/home.html'));
})

//Doesnt read because HTML forms use an special format of request body, but using jsonparser
router.post('/', jsonparser, homeForm.form);

router.get('/css/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/css/style.css'));
})

//EVEN IF THE IMAGES FOLDER DOESNT EXIST, WE ARE CALLING THE IMAGE AT THE VIEW FOLDER WITH /images/RHEL
router.get('/images/RHEL.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/RHEL.jpg'));
})

module.exports= router;

/*router.use('/', express.json());
router.use('/', express.urlencoded({extended: true}));
router.use('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html')
})*/
