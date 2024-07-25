require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

const gitData = {
  "login": "sjcoder743",
  "id": 121203972,
  "node_id": "U_kgDOBzltBA",
  "avatar_url": "https://avatars.githubusercontent.com/u/121203972?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sjcoder743",
  "html_url": "https://github.com/sjcoder743",
  "followers_url": "https://api.github.com/users/sjcoder743/followers",
  "following_url": "https://api.github.com/users/sjcoder743/following{/other_user}",
  "gists_url": "https://api.github.com/users/sjcoder743/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sjcoder743/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sjcoder743/subscriptions",
  "organizations_url": "https://api.github.com/users/sjcoder743/orgs",
  "repos_url": "https://api.github.com/users/sjcoder743/repos",
  "events_url": "https://api.github.com/users/sjcoder743/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sjcoder743/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Shanker Joshi",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "\"Code is like humor. When you have to explain it, it's not funny anymore.\" - Unknown | CS Student | Coding for fun and learning\r\n\r\n",
  "twitter_username": null,
  "public_repos": 22,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2022-12-21T23:42:25Z",
  "updated_at": "2024-07-04T15:05:10Z"
}

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

app.get('/git', (req, res) => {
  res.json(gitData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
