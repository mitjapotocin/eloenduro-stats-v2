const express = require('express')
const mongodb = require('mongodb')
require('dotenv').config()

const router = express.Router()

// GET Results
router.get('/', async (req, res) => {
  const results = await loadResultsCollection()
  res.send(await results.find({}).toArray())
})

// GET Results search by event
router.get('/:event', async (req, res) => {
  const results = await loadResultsCollection()
  res.send(
    await results
      .find({
        event: req.params.event,
      })
      .toArray()
  )
})

// GET Results search by name
router.get('/riders/:name', async (req, res) => {
  const results = await loadResultsCollection()
  let name = new RegExp(req.params.name, 'i')
  res.send(
    await results
      .find({
        Name: name,
      })
      .toArray()
  )
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

//Connect to DB /w default collection  "Results"
async function loadResultsCollection(collection = 'Results') {
  const client = await mongodb.MongoClient.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return client.db('sloenduro-stats').collection(collection)
}

module.exports = router
