const express = require("express");
const { handleNewUrl } = require("../controller/url");
const urlRouter = express.Router();

urlRouter.post("/", handleNewUrl);
// urlRouter.get("/:shortId", handleRedirect);

module.exports = urlRouter;
