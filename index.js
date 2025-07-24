const express = require("express");
const app = express();

const links = [
  "https://example.com/page1",
  "https://example.com/page2",
  "https://example.com/page3"
];

app.get("/", (req, res) => {
  const randomLink = links[Math.floor(Math.random() * links.length)];
  res.redirect(randomLink);
});

module.exports = app;
