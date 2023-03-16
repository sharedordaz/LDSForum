const express = require('express');
const app = express();


function form(req, res) {
  console.log(req.body);

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;

  //res.send(`<p> ${req.body[0]}</p>`);
  res.send(`<ul><li>First Name: ${firstName}</li> <li>Last Name: ${lastName}</li> </ul>`);
}

//If you want to export a function, you need to wrap it in a {}
module.exports = {
  form
};
