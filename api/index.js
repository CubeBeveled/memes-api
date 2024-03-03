const memes = require("./memes.json");
const express = require("express");
const path = require("path");
const api = express();
const port = 3000;

api.use(express.json());

api.get("/", (req, res) => res.sendFile(path.join(__dirname, "main.html")));

api.get("/styles.css", (req, res) => res.sendFile(path.join(__dirname, "styles.css")));

api.get("/eng/random", (req, res) => {
  res.redirect(`https://memes-silk.vercel.app/eng/${memes[Math.floor(Math.random() * memes.length)]}`);
});

api.get("/eng/list", (req, res) => res.sendFile(path.join(__dirname, "memes.json")));

api.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = api;