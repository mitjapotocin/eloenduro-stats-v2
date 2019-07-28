const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const results = require("./routes/api/results");
const events = require("./routes/api/events");

app.use(express.static(__dirname + "/upload"));

app.use("/api/results", results);
app.use("/api/events", events);

// Handle production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) =>
    res.sendFile(__dirname + "/public/indexedDB.html")
  );
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
