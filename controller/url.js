const URL = require("../model/url");

async function handleNewUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "no url" });

  const { nanoid } = await import("nanoid");
  const shortID = nanoid(6);
  await URL.create({
    shortId: shortID,
    redirectedUrl: body.url,
    visitedHistory: [],
  });
  console.log(shortID);
  const allUrl = await URL.find({});
  res.render("home", { allUrl: allUrl, id: shortID });
  // return res.json({ shortID: shortID });
}

async function handleRedirect(req, res) {
  const shortId = req.params.shortId;
  const model = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { visitedAt: new Date() } } }
  );
  if (!model) {
    res.status(404).json("invalid");
  }
  res.redirect(model.redirectedUrl);
}

async function handleAnalytics(req, res) {
  const shortId = req.params.id;
  const model = await URL.findOne({ shortId });
  res.json(model.visitHistory.length);
}

module.exports = { handleNewUrl, handleRedirect, handleAnalytics };
