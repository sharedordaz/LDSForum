const mongoclient = require("../db/connect.js");
const ObjectId = require('mongodb').ObjectId;

const register = require('../controllers/registerForm.js');

const getAll = async (req, res, next) => {
  try {
    dbo = mongoclient.getDB().db("LDSForum");
    collection = dbo.collection('users');
    result = await collection.find();
    resultArray = result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  }
  catch (e) {
    console.log("Funny error" + e)
  }
}

const getSingle = async (req, res, next) => {
  try {
    //get GET userId (from URL) req.params = $_GET in PHP
    const userId = new ObjectId(req.params.id);
    result = mongoclient.getDB().db("LDSForum").collection('users').find({ _id: userId })
    await result.toArray().then((lists) => {
      console.log('Single Contact Data example: \nId: ' + lists[0]);
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    })
  } catch (error) {
    res.status(404).send("<p>Couldn't access to database!\n <hr>Error: </p>\t" + error);
  }
}

module.exports = {
  getAll,
  getSingle,
  //updateUsr,
  //delUsr
};
