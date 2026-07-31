const express = require("express");

const app = express();

const expenseRoutes = require("./routes/expenseRoutes");

app.use(express.json());

// Routes
app.use("/expenses", expenseRoutes);

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Smart Expense Tracker API is running successfully."
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found."
    });
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: "Internal Server Error"
    });
});

module.exports = app;