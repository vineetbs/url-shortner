const express = require("express");
const app = express();

const { handleAnalytics } = require("./controller/url");
const staticRouter = require("./routes/staticRouter");
const urlRouter = require("./routes/url");
const userRouter = require("./routes/userRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/url", urlRouter);
app.use("/", staticRouter);
app.use("/user", userRouter);

app.get("/test", async (req, res) => {
  const allUrl = await URL.find({});
  res.render("home", { allUrl: allUrl });
});
app.get("/analytics/:id", handleAnalytics);

app.listen(8000, () => console.log("server started at port 8000"));
