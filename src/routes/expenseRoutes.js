const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseController");

router.post("/", expenseController.addExpense);
router.get("/", expenseController.getAllExpenses);
router.get("/total", expenseController.getTotalExpenses);
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;