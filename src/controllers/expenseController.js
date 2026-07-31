const expenseService = require("../services/expenseService");

const addExpense = (req, res) => {
    const expense = expenseService.addExpense(req.body);

    res.status(201).json(expense);
};

const getAllExpenses = (req, res) => {
    const { category } = req.query;

    const expenses = expenseService.getAllExpenses(category);

    res.status(200).json(expenses);
};

const getTotalExpenses = (req, res) => {
    const { category } = req.query;

    const result = expenseService.getTotalExpenses(category);

    res.status(200).json(result);
};

module.exports = {
    addExpense,
    getAllExpenses,
    getTotalExpenses
};