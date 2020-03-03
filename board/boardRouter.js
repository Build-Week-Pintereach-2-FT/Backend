const express = require("express");
const router = express.Router();

const restricted = require("../auth/restMiddleware");
const Boards = require("./boardModel");

router.get("/",  (req, res) => {
  Boards.getBoards()
    .then(boards => {
      res.json(boards);
    })
    .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
    const { id } = req.params;
  
    Articles.findById(id)
      .then(board => {
        if (board) {
          res.json(board);
        } else {
          res
            .status(404)
            .json({ message: "Could not find board with given id." });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get board" });
      });
  });


router.post("/", restricted, (req, res) => {
  const boardData = req.body;

  Articles.addArticle(boardData)
    .then(newBoard => {
      res.status(201).json(newBoard);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new board" });
    });
});

router.delete("/:id", restricted, (req, res) => {
    const { id } = req.params;
  
    Boards.deleteBoard(id)
      .then(deleted => {
        if (deleted) {
          res.json({ removed: deleted });
        } else {
          res
            .status(404)
            .json({ message: "Could not find board with given id" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to delete board" });
      });
  });
  




module.exports = router;
