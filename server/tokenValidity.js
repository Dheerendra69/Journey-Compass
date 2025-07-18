const jwt = require("jsonwebtoken");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg3MzU2YzhjZTMwMDE2MGM2YzFmOTAwIiwiZW1haWwiOiJzaGlrYW1hcnVAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkMk10SXMvdFZibXIyM3laMnhZRHlmdTRLZ3FQa09XM2p5QWY2ZWJEL1d2Q05uQzUwSjlLV3EifSwiaWF0IjoxNzUyMzg5MzIwLCJleHAiOjE3NTI0NzU3MjB9.ZH7IsR37JIZQIwPA2n1 - UnoJJwPx6Jq1_VryTYUCxrI";
const secret = "secret";

try {
  jwt.verify(token, secret);
} catch (err) {
  console.log(err);
}
