const express = require("express");
const router = express.Router();

const expenseController = require("../controllers/expenseController");

/**
 * @swagger
 * /expenses:
 *   post:
 *     summary: Create a new expense
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - amount
 *               - category
 *               - date
 *             properties:
 *               title:
 *                 type: string
 *                 example: Pizza
 *               amount:
 *                 type: number
 *                 example: 350
 *               category:
 *                 type: string
 *                 example: Food
 *               date:
 *                 type: string
 *                 format: date
 *                 example: 2026-07-31
 *     responses:
 *       201:
 *         description: Expense created successfully
 *       400:
 *         description: Invalid input
 */
router.post("/", expenseController.addExpense);

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Get all expenses
 *     tags: [Expenses]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter expenses by category
 *     responses:
 *       200:
 *         description: List of expenses
 */
router.get("/", expenseController.getAllExpenses);

/**
 * @swagger
 * /expenses/total:
 *   get:
 *     summary: Get total expenses
 *     tags: [Expenses]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *         description: Calculate total for a specific category
 *     responses:
 *       200:
 *         description: Total expense amount
 */
router.get("/total", expenseController.getTotalExpenses);

/**
 * @swagger
 * /expenses/{id}:
 *   delete:
 *     summary: Delete an expense
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Expense ID
 *     responses:
 *       204:
 *         description: Expense deleted successfully
 *       404:
 *         description: Expense not found
 */
router.delete("/:id", expenseController.deleteExpense);

module.exports = router;