const express = require("express");
const router = express.Router();

const restricted = require("../auth/restMiddleware");
const Boards = require("./boardModel");

router.get("/",  (req, res) => { // /api/boards -- gets list of boards, no need to log in to get boards
  Boards.getBoards()
    .then(boards => {
      res.json(boards);
    })
    .catch(err => res.send(err));
});

router.get("/userboards/:id", restricted, (req, res) => { // /api/boards -- gets list of boards, no need to log in to get boards
  Boards.getUsersBoards()
    .then(boards => {
      res.json(boards);
    })
    .catch(err => res.send(err));
});

router.get("/:id", restricted, (req, res) => {
    const { id } = req.params;
  
    Boards.findById(id)
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

  Boards.addBoard(boardData)
    .then(newBoard => {
      res.status(201).json(newBoard);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.delete("/:id", restricted, (req, res) => {
    const { id } = req.params;
  console.log(req.decodedToken)
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

  
  

  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;
    Boards
      .editBoard(id, body)
      .then(updatega => {
        console.log("Update Spell Critical Hit!!! It was Super Effective!");
        res.status(200).json(updatega);
      })
      .catch(err => {
        status(404).json(error.message);
      });
  });


module.exports = router;
