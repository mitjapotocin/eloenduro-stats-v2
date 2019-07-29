const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const history = require("connect-history-api-fallback");
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

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

//For history mode in Vue-Router
const staticFileMiddleware = express.static(__dirname);
app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
);
app.use(staticFileMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
