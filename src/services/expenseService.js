const { v4: uuidv4 } = require("uuid");

const expenses = [];

const addExpense = (data) => {

    const expense = {
        id: uuidv4(),
        title: data.title,
        amount: data.amount,
        category: data.category,
        date: data.date
    };

    expenses.push(expense);

    return expense;
};

module.exports = {
    addExpense
};