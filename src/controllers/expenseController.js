const expenseService = require("../services/expenseService");

const addExpense = (req, res) => {
    const expense = expenseService.addExpense(req.body);

    res.status(201).json(expense);
};

module.exports = {
    addExpense
};


const getAllExpenses = (req, res) => {
    const expenses = expenseService.getAllExpenses();

    res.status(200).json(expenses);
};
module.exports = {
    addExpense,
    getAllExpenses
};