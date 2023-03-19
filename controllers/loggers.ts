import { mongoclient } from '../db/connect';
import { register } from '../controller/registerForm';

const getAll = async (req, res, next) => {
  try {
    const dbo: any = mongoclient.db('LDSForum');
    const collection: any = dbo.collection('users');
    const result = await collection.find();
    const resultArray = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(resultArray);
  } catch (e) {
    console.log('Funny error' + e);
    next(e);
  }
};

const getSingle = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = mongoclient.getDB().db('LDSForum').collection('users').find({ _id: userId });
    const resultArray = await result.toArray();
    console.log('Single Contact Data example: \nId: ' + resultArray[0]);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(resultArray[0]);
  } catch (error) {
    res.status(404).send("<p>Couldn't access to database!\n <hr>Error: </p>\t" + error);
  }
};

const updateUsr = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const doc = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    age: req.body.age,
    description: req.body.description,
    password: req.body.password,
  };

  const collection: any = mongoclient.getDB().db('LDSForum').collection('users');
  const result = await collection.replaceOne({ _id: userId }, doc);
  if (result.modifiedCount > 0) {
    res.status(204).send('PUT request successful');
  } else {
    res.status(500).json(result.error || 'Some error occurred while updating the contact.');
  }
};

const delUsr = async (res, req, next) => {
  const userId = new ObjectId(req.params.id);

  const collection: any = mongoclient.getDB().db('LDSForum').collection('users');
  const result = await collection.deleteOne({ _id: userId }, true);

  if (result.deletedCount > 0) {
    res.status(204).send('DELETE request sucessful');
  } else {
    res.status(500).json(result.error || 'Some error occurred while deleting the contact.');
  }
};

export { getAll, getSingle, updateUsr, delUsr };
