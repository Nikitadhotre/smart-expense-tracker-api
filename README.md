# Smart Expense Tracker API

A RESTful API built with **Node.js** and **Express.js** to manage daily expenses. The API allows users to create, retrieve, filter, calculate totals, and delete expenses. Expense data is stored in a local JSON file, and the project includes input validation, automated testing, and Swagger API documentation.

---

## Features

- Add a new expense
- View all expenses
- Filter expenses by category
- Calculate total expenses
- Delete an expense by ID
- Input validation
- Global error handling
- File-based JSON storage
- Automated API testing with Jest & Supertest
- Swagger/OpenAPI documentation

---

## Tech Stack

- Node.js
- Express.js
- Jest
- Supertest
- Swagger UI Express
- Swagger JSDoc

---

## Project Structure

```
expense-tracker/
│── src/
│   ├── controllers/
│   ├── data/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── swagger.js
│
│── tests/
│   └── expense.test.js
│
│── README.md
│── AI_NOTES.md
│── package.json
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Nikitadhotre/smart-expense-tracker-api.git
```

Navigate to the project folder:

```bash
cd smart-expense-tracker-api

```

Install dependencies:

```bash
npm install
```

---

## Running the Application

Start the development server:

```bash
npm run dev
```

Or start the production server:

```bash
npm start
```

The server runs on:

```
http://localhost:3000
```

---

## Running Tests

Execute the test suite:

```bash
npm test
```

---

## API Endpoints

### Add Expense

```
POST /expenses
```

Example Request

```json
{
  "title": "Pizza",
  "amount": 350,
  "category": "Food",
  "date": "2026-07-31"
}
```

---

### Get All Expenses

```
GET /expenses
```

---

### Filter Expenses

```
GET /expenses?category=Food
```

---

### Get Total Expenses

```
GET /expenses/total
```

Filter by category:

```
GET /expenses/total?category=Food
```

---

### Delete Expense

```
DELETE /expenses/:id
```

---

## Swagger Documentation

After starting the server, open:

```
http://localhost:3000/api-docs
```

Swagger UI provides interactive documentation for all API endpoints.

---

## Input Validation

The API validates:

- Required fields
- Positive expense amount
- Valid date format

Invalid requests return appropriate HTTP status codes and error messages.

---

## Error Handling

The application includes:

- Validation error handling
- 404 Route Not Found handler
- Global error handler for unexpected errors

---

## Testing

The project includes automated tests using:

- Jest
- Supertest
- Postman

Tests cover:

- Home route
- Add expense
- Validation
- Get expenses
- Filter expenses
- Total expenses
- Delete expense

---

## Author

**Nikita Dhotre**