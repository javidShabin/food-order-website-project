require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// Created server
app.listen(port, () => {
  console.log(`The server running on port: ${port}`);
});
