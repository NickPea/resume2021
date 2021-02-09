/**
 * Node Server
 */

//env
const dotenv = require('dotenv');
dotenv.config();

//utils
const path = require("path");

//routes
const apiRouter = require('./api-router');

//express
const express = require("express");
const app = express();

//static
app.use(express.static("../dist"));

//API
app.use('/api', apiRouter);

//SPA
app.use("/", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});

//listen
const port = process.env.PORT
app.listen(port, () => {
  console.log(`__ Node Server Running on Port:${port} __`);
});
