const express = require("express");

const app = express();
const expenseRoutes = require("./routes/expenseRoutes");

// Middleware
app.use(express.json());
app.use("/expenses", expenseRoutes);

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Smart Expense Tracker API is running successfully!",
    });
});

module.exports = app;