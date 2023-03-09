const express = require('express');
const app = express();


function form (req, res){
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  res.send(`<ul><li>First Name: ${firstName}</li> <li>Last Name: ${lastName}</li> </ul>`);
}

//If you want to export a function, you need to wrap it in a {}
module.exports = {
  form
};
