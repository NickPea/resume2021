/**
 * API ROUTER
 */

// endpoint: 'api/...'

const express = require("express");
const router = express.Router();

router.get("/landing-summary", (req, res) => {
  res.send("hello from the other router");
});

module.exports = router;
