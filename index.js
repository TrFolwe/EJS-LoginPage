const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static(__dirname, "views/css"));
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});

app.post("/details", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  res.render("Details", { username, password });
})

app.listen(80, () => console.log("Server started..."));