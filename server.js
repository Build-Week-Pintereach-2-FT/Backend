const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const userRouter = require("./users/users-router");
const boardsRouter = require("./board/boardRouter")
const articlesRouter = require("./articles/articleRouter");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", req, res => {
    res.status(200).json({ message: "yayayayay!"})

})




server.use("/api/users", userRouter);
server.use("/api/boards", boardsRouter)
server.use("/api/articles", articlesRouter);

module.exports = server;
