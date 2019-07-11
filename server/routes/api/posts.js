const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const router = express.Router();

// GET Posts
router.get("/", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// GET Posts search my name
router.get("/:name", async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({ name: req.params.name }).toArray());
});

// Add Post
router.post("/", async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    name: req.body.name,
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
  });

  return client.db("sloenduro-stats").collection("posts");
}

module.exports = router;
