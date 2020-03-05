const request = require("supertest");
const post = require('./boardRouter')
const server = require("../server");

describe("boards router", function() {

  
    it("should run the tests", function() {
      expect(true).toBe(true);
    });
   
    it("tests if there is a response from the api", async () => {
          const res = await request(server)
    .post("/api/boards")
    .send({
      boardName: "PIZZZZEESASASAS",
      boardDescription: "pinapple and other blastphemous toppings",
      userId: 1
    });
  expect(res).toBeDefined();
  // expect(boards.addBoard).toHaveBeenCalledTimes(1)
  expect(res.status).toBe(201)
    })
  
});
  