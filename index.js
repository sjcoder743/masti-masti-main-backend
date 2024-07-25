require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter', (req, res) => {
  res.send("This is twitter page")
})

app.get("/login", (req, res) => {
  res.send("<h1>You are logged in succesfull</h1>");
})

app.get("/insta", (req, res) => {
  res.send("This is insta page")
})

app.get("/whatsapp", (req, res) => {
  res.send("<h1><i>Just looking for whatsApp</i></h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
