import express from "express";
import { MongoClient } from "mongodb";
const app = express();
const PORT = 3000;
const client = new MongoClient("mongodb://localhost:27017/");
async function connectMongodb() {
  await client.connect();
}
const DB = client.db("BOOkMANAGE");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongodb().then(() => {
    console.log("Connected to MongoDB");
  });
});

app.get("/allBooks", async (req: express.Request, res: express.Response) => {
  try {
    const AllBooks = await DB.collection("AllBooks").find().toArray();
    res.send(AllBooks);
  } catch (error) {
    res.send(error);
  }
});
