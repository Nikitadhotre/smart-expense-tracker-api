const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Smart Expense Tracker API is running successfully!",
    });
});

module.exports = app;