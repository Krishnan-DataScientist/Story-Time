// backend/db/mongoClient.js
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "your mongo db connection";

const client = new MongoClient(uri, {
  ssl: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let isConnected = false;

async function connectToDb() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  }
  return client;
}

module.exports = connectToDb;
