const path = require("path");
const express = require("express");
const app = express();
const appPort = process.env.PORT | 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(appPort, () => {
  console.log("Server started on port " + appPort);
});
