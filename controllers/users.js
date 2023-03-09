const mongoclient = require("../db/connect.js"); 
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const session = DB.connect()
  try{
    dbo = session.db("LDSForum");
    collection =  dbo.collection('main');
    result = await collection.find();
    resultArray = result.toArray().then( (lists) =>{
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
    }
  catch (e){
      console.log("Funny error" + e )
  }
}

const createNew = async (req, res) =>{
  
  const session = DB.connect()
  
  const doc = { firstName : req.body.firstName, 
                lastName : req.body.lastName
              };

  const collection = session.db("LDSForum").collection("main");

    
  const result = await collection.insertOne(doc);
  if (result.acknowledged){
    res.status(201).json(result);
  } else {
   res.status(500).json(result.error || 'Some error occurred while creating the contact.');
  }
  console.log(`A document was inserted with the _id ${result.insertedId}`)
}

module.exports = {
  getAll,
  createNew
};
