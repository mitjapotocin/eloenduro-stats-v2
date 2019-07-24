const express = require("express");
const mongodb = require("mongodb");
require("dotenv").config();

const router = express.Router();
//change name of posts to results, change add posts requirements
// GET Results
router.get("/", async (req, res) => {
  const results = await loadResultsCollection();
  res.send(await results.find({}).toArray());
});

// GET Results search my name
router.get("/:Name", async (req, res) => {
  const results = await loadResultsCollection();
  res.send(await results.find({
    name: req.params.name
  }).toArray());
});

// Add Reults
router.post("/", async (req, res) => {
  const results = await loadResultsCollection();
  await results.insertOne(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.status(201).send()

  })


  // await results.insertOne({
  //   Name: req.body.Name,
  //   Team: req.body.Team,
  //   Name: req.body.Name,
  //   Time: req.body.Time,

  //   PlacePoints: req.body.PlacePoints,

  // "Team": "GKD BOROVCI",
  // "Club": "",
  // "Nation": "SLO",
  // "Birth": "",
  // "Course": "3 Stages BBF",
  // "Category": "Moški 25-29",
  // "Time": "00:10:50,000",
  // "Behind": "00:00:47,960",
  // "Penalty": "",
  // "1.Control(Name)": "Stage 1",
  // "1.Splittime": "00:04:09,100",
  // "1.Split-Pos.": 8,
  // "1.Split-Behind": "00:00:19,710",
  // "1.Total Time": "00:04:09,100",
  // "1.Total Pos.": 8,
  // "1.Total-Behind": "00:00:19,710",
  // "2.Control(Name)": "Stage 2",
  // "2.Splittime": "00:04:38,360",
  // "2.Split-Pos.": 11,
  // "2.Split-Behind": "00:00:24,020",
  // "2.Total Time": "00:08:47,460",
  // "2.Total Pos.": 11,
  // "2.Total-Behind": "00:00:43,730",
  // "3.Control(Name)": "Stage 3",
  // "3.Splittime": "00:02:02,540",
  // "3.Split-Pos.": 8,
  // "3.Split-Behind": "00:00:04,580",
  // "3.Total Time": "00:10:50,000",
  // "3.Total Pos.": 10,
  // "3.Total-Behind": "00:00:47,960",
  // "": ""

});

async function loadResultsCollection() {
  const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true
  });

  return client.db("sloenduro-stats").collection("Results");
}

module.exports = router;