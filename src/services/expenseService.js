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

const getAllExpenses = (category) => {
    const expenses = readExpenses();

    if (category) {
        return expenses.filter(
            (expense) =>
                expense.category.toLowerCase() === category.toLowerCase()
        );
    }

    return expenses;
};

module.exports = {
    addExpense,
    getAllExpenses
};