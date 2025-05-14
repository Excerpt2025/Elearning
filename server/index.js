const express = require("express");
const cors = require("cors");
const axios = require('axios');
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const port = process.env.PORT || 8081;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use(express.static(path.join(__dirname, "dist")));
// Catch-all route to serve the frontend


// Start the Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
