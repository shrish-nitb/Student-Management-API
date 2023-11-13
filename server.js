//init express
const express = require("express");
const app = express();

//init mongo
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/";

const connectDB = async () => {
  return await MongoClient.connect(url);
};

const createUser = async (uid, name, pic, email, isStudent, enrollmentId) => {
  var conn = await connectDB();
  await conn.db("testDB").collection("user").insertOne({
    uid: uid,
    name: name,
    profilepic: pic,
    email: email,
    isStudent: isStudent,
    enrollmentId: enrollmentId,
  });
  await conn.close();
};



createUser("a","b","c","d",false,"010101");
