const expenseService = require("../services/expenseService");

const addExpense = (req, res) => {
    const expense = expenseService.addExpense(req.body);

    res.status(201).json(expense);
};

module.exports = {
    addExpense
};
