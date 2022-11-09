const { MongoClient } = require('mongodb');
const connection = "mongodb://localhost:27017";
const client = new MongoClient(connection);
export default async function findSeatByRowCol(row,col) {
  try {
    await client.connect();
    const testCollection = await client.db("test").collection('seat');
    const query = {
        col: {col}
    }
    const cursor = testCollection.find(query);
    cursor.on("data", data => console.log(data));
  }catch(err){
    console.log(err)
  }
}
