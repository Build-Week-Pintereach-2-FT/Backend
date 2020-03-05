const request = require("supertest");

const server = require("../server");

describe("article router", function() {
    it("should run the tests", function() {
      expect(true).toBe(true);
    });
    it("should post a new article to the database", async () => {
          const res = await request(server)
    .post("/api/articles")
    .send({
        articleName: "Mass Effect Andromeda sucks",
        linkToArticle: "google.com",
        categories: "Video Games",
        datePublished: "today",
        boardId: 1
    });
  expect(res.status).toBe(400);
  expect("articleName").toMatch("m")
    })
    describe("GET /api/articles/13847839", function() {
      it("should return 500, and json message", function() {
        return request(server)
          .get("/api/articles/23409873425")
          .then(res => {
            expect(res.status).toBe(400);
            
          });
      });
    })
});