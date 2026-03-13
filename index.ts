const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// serve static files
app.use(express.static("public"));

let userName = "";

// login page
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// receive name using POST
app.post("/login", (req, res) => {
    userName = req.body.name;
    res.redirect("/hello");
});

// show hello page
app.get("/hello", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "hello.html"));
});

// API to send name to frontend
app.get("/api/name", (req, res) => {
    res.json({ name: userName });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});