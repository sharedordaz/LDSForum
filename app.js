const express = require("express");
const app = express();
const port = 8000;

app
//Because this .use doesnt have mount point (/), is sended to all the apps
.use( (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
//Because this middleware .use have mount point, is executed for ANY HTTP request in that path

app.use('/', require('./routers'));


//app.get and .post are executed just in GET and POST request to an specific route (mount point)

app.listen(port, () => {
  console.log (`App running on port ${port}`);
})
