const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://vineet:vineet123@cluster0.t0w7x.mongodb.net/url")
  .then(() => console.log("db connected"));

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectedUrl: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        visitedAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
