const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const items = require("./Models/Items");

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
  res.send(items);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
