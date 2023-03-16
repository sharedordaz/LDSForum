const express = require('express');
const app = express();


function ShowAccount(req, res) {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var age = req.body.age;
  var description = req.body.description;
  var password = req.body.password;

  const HTML = `<ul><li>First Name: ${firstName}</li> <li>Last Name: ${lastName}</li> <li> Email: ${email} <li> Age: ${age} </li> <li> Description: ${description}  </li> <li> Password: ${password} </li> </ul> `;

  //res.send(`<p> ${req.body[0]}</p>`);
  res.send(HTML + "You are funny");
}

//If you want to export a function, you need to wrap it in a {}
module.exports = {
  ShowAccount
};
