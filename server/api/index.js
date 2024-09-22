const express = require("express");

const app = express();

const randomMessages = [
  "Hello World!",
  "Goodbye World!",
  "JavaScript is fun!",
  "Exprrrresssssss",
];

app.get("/message", (req, res) => {
  res.send({
    message: randomMessages[Math.floor(Math.random() * randomMessages.length)],
  });
});

module.exports = app;
