const request = require("supertest");
const app = require("../src/app");

describe("Expense API", () => {

    test("GET / should return welcome message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe(
            "Smart Expense Tracker API is running successfully."
        );
    });

    test("POST /expenses should create a new expense", async () => {
        const response = await request(app)
            .post("/expenses")
            .send({
                title: "Pizza",
                amount: 300,
                category: "Food",
                date: "2026-07-31"
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.title).toBe("Pizza");
        expect(response.body).toHaveProperty("id");
    });

    test("POST /expenses should fail when title is missing", async () => {
        const response = await request(app)
            .post("/expenses")
            .send({
                amount: 300,
                category: "Food",
                date: "2026-07-31"
            });

        expect(response.statusCode).toBe(400);
    });

    test("POST /expenses should fail for invalid amount", async () => {
        const response = await request(app)
            .post("/expenses")
            .send({
                title: "Pizza",
                amount: -100,
                category: "Food",
                date: "2026-07-31"
            });

        expect(response.statusCode).toBe(400);
    });

    test("POST /expenses should fail for invalid date", async () => {
        const response = await request(app)
            .post("/expenses")
            .send({
                title: "Pizza",
                amount: 300,
                category: "Food",
                date: "invalid-date"
            });

        expect(response.statusCode).toBe(400);
    });

    test("GET /expenses should return all expenses", async () => {
        const response = await request(app).get("/expenses");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test("GET /expenses?category=Food should filter expenses", async () => {
        const response = await request(app).get("/expenses?category=Food");

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    test("GET /expenses/total should return total", async () => {
        const response = await request(app).get("/expenses/total");

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty("total");
    });

    test("DELETE /expenses should return 404 for invalid id", async () => {
        const response = await request(app)
            .delete("/expenses/invalid-id");

        expect(response.statusCode).toBe(404);
    });

});