const express = require("express");
const router = require('express').Router();

const jsonparser = express.json();
const urlparser = express.urlencoded();

const controller = require("../controllers/users.js");

router.get("/", controller.getAll);

router.use("/", jsonparser);
router.post("/", controller.createNew);

//Send and id value to req.params.id
router.put('/:id', controller.updateUsr);

router.delete('/:id', controller.delUsr);

module.exports = router;
