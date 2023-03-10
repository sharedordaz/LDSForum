//THIS IS THE MAIN ROUTER, IT REDIRECTS YOU TO OTHER ROUTERS
const express = require("express");
const router = require('express').Router();

const path = require('path');

//THE HOME ROUTER- MIDDLEWARE FUNCTION IS the REQUIRE
router.use("/", require('./home.js'));

router.use("/users", require('./users.js'));

router.use("/api-docs", require("./swagger.js"))

//THE EVERYTHING ELSE ROUTER
router.get('*', (req, res, next) => {
  res.status(404).send("<h1>Undefined Route</h1>");
})

module.exports = router;
