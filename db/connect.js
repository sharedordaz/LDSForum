const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

async function DBConnect(){
  const client = new MongoClient(process.env.DB_URI);
  const DBobject =  client.connect();
  return DBobject;
}

module.exports = {
DBConnect
};
