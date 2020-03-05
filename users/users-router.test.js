const request = require("supertest");

const server = require("../server");

describe("users router", function() {
  it("should run the tests", function() {
    expect(true).toBe(true);
  });
  it("allows user to login with correct credentials", async () => {
    const res = await request(server)
      .post("/api/users/login")
      .send({
        username: "daisy",
        password: "flower"
      });
    expect(res.status).toBe(200);
  });

  it("denies user with incorrect credentials", async () => {
    const res = await request(server)
      .post("/api/users/login")
      .send({
        username: "luigi",
        password: "mansion"
      });
    expect(res.status).toBe(401);
  });
  // it("creates a new user", async () => { //works everytime you put a new set of credentials in. (obviously)
  //   const res = await request(server)
  //     .post("/api/users/register")
  //     .send({
  //       username: "bowser",
  //       password: "mechakupa",
  //       email: "bowser@gmail.com"
  //     });
  //   expect(res.status).toBe(201);
  // });
  it("sends an error if credential parameter are incorrect", async () => {
    const res = await request(server)
      .post("/api/users/register")
      .send({
        stupidname: "wario",
        password: "garlic"
      });
    expect(res.status).toBe(500);
  });
});
