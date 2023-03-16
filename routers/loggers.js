const express = require("express");
const router = require('express').Router();
const path = require('path');

router.get("/", (req, res, next) => {
  res.send("Loggers");
})
module.exports = router;
