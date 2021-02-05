//
const path = require('path');

const express = require("express");
const app = express();

app.use(express.static("dist"));

app.use("/", (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(5555, () => {
    console.log('__ Node Server Running __');
})