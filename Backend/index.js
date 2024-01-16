const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const allRoutes = require("./Route/allRoutes");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Use middleware to parse JSON and url-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/website");
};

connect();
app.use(cors());
app.use("/", allRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
