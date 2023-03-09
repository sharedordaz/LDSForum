const express = require("express"); 
const router = require('express').Router();
const path = require('path');

const jsonparser = express.json();
const urlparser = express.urlencoded();

const  controller = require("../controllers/users.js");
router.get("/", controller.getAll);

module.exports = router;
