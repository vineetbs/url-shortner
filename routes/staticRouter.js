const express = require("express");
const URL = require("../model/url");

const router = express.Router();

router.get("/", async (req, res) => {
  const allUrl = await URL.find({});
  res.render("home", { allUrl: allUrl });
  console.log(allUrl);
});

module.exports = router;
