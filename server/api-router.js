/**
 * API ROUTER
 */

// endpoint: 'api/...'

const express = require("express");
const router = express.Router();

router.get("/get-landing-page-data", (req, res) => {
  const landing_page_data = {
    summary: "Specializing in the 'REACT & NODE JS' application creation and improvement.",
  };
  res.send(landing_page_data);
});

module.exports = router;
