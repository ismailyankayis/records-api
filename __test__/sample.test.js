const request = require("supertest");
const app = require("../app");

describe("POST /api/records - Successfull Request", () => {
    test("It should respond records by given conditions", async () => {
        const response = await request(app).post("/api/records").send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        });
        expect(response.statusCode).toBe(200);
        expect(response.body.code).toBe(0);
    });
});

describe("POST /api/records - Start date is less than end date control", () => {
    test("It should respond with error msg", async () => {
        const response = await request(app).post("/api/records").send({
            "startDate": "2019-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
        });
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(-1);
        expect(response.body.msg).toBe("End date must be greater than start date!");
    });
});

describe("POST /api/records - Min Count Control", () => {
    test("It should respond with error msg", async () => {
        const response = await request(app).post("/api/records").send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": -1,
            "maxCount": 3000
        });
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(-1);
        expect(response.body.msg).toBe("Min count must be greater than zero!");
    });
});

describe("POST /api/records - Max Count Control", () => {
    test("It should respond with error msg", async () => {
        const response = await request(app).post("/api/records").send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": -1
        });
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(-1);
        expect(response.body.msg).toBe("Max count must be greater than zero!");
    });
});

describe("POST /api/records - Max Count > Min Count Control", () => {
    test("It should respond with error msg", async () => {
        const response = await request(app).post("/api/records").send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 2500
        });
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(-1);
        expect(response.body.msg).toBe("Max count must be greater than min count!");
    });
});

describe("POST /api/records - Missing parameter", () => {
    test("It should respond with error msg", async () => {
        const response = await request(app).post("/api/records").send({
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700
        });
        expect(response.statusCode).toBe(400);
        expect(response.body.code).toBe(-1);
        expect(response.body.msg).toBe("Max count can not be empty!");
    });
});