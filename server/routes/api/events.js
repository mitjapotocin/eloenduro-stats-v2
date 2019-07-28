const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const router = express.Router();

// GET Results
router.get("/", async (req, res) => {
  const results = await loadResultsCollection();
  res.send(await results.find({}).toArray());
});

// GET Results search ... prepared if needed
// router.get("/:course", async (req, res) => {
//   const results = await loadResultsCollection();
//   res.send(
//     await results
//       .find({
//         Course: req.params.course
//       })
//       .toArray()
//   );
// });

// Add Results
router.post("/", async (req, res) => {
  const results = await loadResultsCollection();
  await results.insertOne(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log("saved to database");
    res.status(201).send();
  });
});

//Conect to DB /w default collection  "Results"
async function loadResultsCollection() {
  const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
  });
  return client.db("sloenduro-stats").collection("Events");
}

module.exports = router;
