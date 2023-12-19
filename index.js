const express = require("express");

const app = express();

app.get("/products", (req, res) => {
    res.status(200).json({ message: "ok. products!" });
});

app.get("/", (req, res) => {
    res.status(200).json({ message: "ok. index!" });
});

app.listen(3001, () => {
    console.log("Listening on port 3001.");
});