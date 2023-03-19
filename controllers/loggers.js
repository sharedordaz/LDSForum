const mongoclient = require("../db/connect.js");
const ObjectId = require('mongodb').ObjectId;


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


module.exports = {
  getAll,
  //getSingle,
  //updateUsr,
  //delUsr
};
