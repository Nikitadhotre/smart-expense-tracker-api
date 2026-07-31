const expenseService = require("../services/expenseService");

const addExpense = (req, res, next) => {
    try {
        const { title, amount, category, date } = req.body;

        // Required fields
        if (!title || amount === undefined || !category || !date) {
            return res.status(400).json({
                message: "Title, amount, category and date are required."
            });
        }

        // Amount validation
        if (typeof amount !== "number" || amount <= 0) {
            return res.status(400).json({
                message: "Amount must be a positive number."
            });
        }

        // Date validation
        if (isNaN(Date.parse(date))) {
            return res.status(400).json({
                message: "Invalid date format."
            });
        }

        const expense = expenseService.addExpense(req.body);

        res.status(201).json(expense);

    } catch (error) {
        next(error);
    }
};

const getAllExpenses = (req, res, next) => {
    try {
        const { category } = req.query;

        const expenses = expenseService.getAllExpenses(category);

        res.status(200).json(expenses);

    } catch (error) {
        next(error);
    }
};

const getTotalExpenses = (req, res, next) => {
    try {
        const { category } = req.query;

        const result = expenseService.getTotalExpenses(category);

        res.status(200).json(result);

    } catch (error) {
        next(error);
    }
};

const deleteExpense = (req, res, next) => {
    try {
        const { id } = req.params;

        const deleted = expenseService.deleteExpense(id);

        if (!deleted) {
            return res.status(404).json({
                message: "Expense not found."
            });
        }

        res.status(204).send();

        return res.status(200).json({
            message: "Expense deleted successfully."
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    addExpense,
    getAllExpenses,
    getTotalExpenses,
    deleteExpense
};