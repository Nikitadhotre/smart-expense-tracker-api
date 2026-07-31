const { v4: uuidv4 } = require("uuid");
const { readExpenses, writeExpenses } = require("../utils/fileHelper");

const addExpense = (data) => {
    const expenses = readExpenses();

    const expense = {
        id: uuidv4(),
        title: data.title,
        amount: data.amount,
        category: data.category,
        date: data.date
    };

    expenses.push(expense);

    writeExpenses(expenses);

    return expense;
};

const getAllExpenses = () => {
    return readExpenses();
};

module.exports = {
    addExpense,
    getAllExpenses
};