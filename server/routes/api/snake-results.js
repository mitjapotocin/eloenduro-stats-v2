const express = require('express')
const { MongoClient } = require('mongodb')
require('dotenv').config()

const router = express.Router()

// GET Results
router.get('/', async (req, res) => {
  const results = await loadResultsCollection()
  res.send(await results.find({}).toArray())
})

// Add Results
router.post('/', async (req, res) => {
  const results = await loadResultsCollection()
  await results.insertOne(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.status(201).send()
  })
})

//Conect to DB /w default collection  "Results"
async function loadResultsCollection() {
  // const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, {
  //   useNewUrlParser: true,
  // })
  // return client.db('sloenduro-stats').collection('snake-results')

  const client = new MongoClient(process.env.DB_CONNECTION, { useUnifiedTopology: true })

  try {
    // Connect to the MongoDB cluster
    await client.connect()

    // Make the appropriate DB calls
    await listDatabases(client)
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

module.exports = router
