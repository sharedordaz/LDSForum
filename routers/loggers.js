const express = require("express");
const router = require('express').Router();
const path = require('path');

const jsonparser = express.json();
const urlparser = express.urlencoded({ extended: true });

const registerForm = require('../controllers/registerForm.js');
const controller = require('../controllers/loggers.js');



router.use("/", urlparser);

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, '../view/register.html'));
})

router.post('/', registerForm.registerNew);

router.get("/", controller.getAll);

router.get("/:id", controller.getSingle);


router.get('/css/style.css', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../view/css/style.css'));
})


module.exports = router;
