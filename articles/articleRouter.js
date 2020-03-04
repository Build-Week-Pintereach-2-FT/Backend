const express = require("express");
const router = express.Router();
const Articles = require("./articleModel");
const restricted = require("../auth/restMiddleware");


router.get("/categories", restricted, (req, res) => {
  Articles.getCategory()
    .then(categories => {
      res.status(200).json(categories);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get categories" });
    });
});

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Articles.getUserArticles()
    .then(article => {
      if (article) {
        res.json(article);
      } else {
        res
          .status(404)
          .json({ message: "Could not find article with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get articles" });
    });
});

router.get('/', (req, res) => {
    
    Articles.getArticles()
    .then(articles => {
      res.status(200).json(articles)
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get articles' });
    });
  });

router.post("/", restricted, (req, res) => {
  const articleData = req.body;

  Articles.addArticle(articleData)
    .then(newArticle => {
      res.status(201).json(newArticle);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});


router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Articles.deleteArticle(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find article with given id" });
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { body } = req;
  Articles
    .updateArticle(id, body)
    .then(updatega => {
      console.log("Update Spell Critical Hit!!! It was Super Effective!");
      res.status(200).json(updatega);
    })
    .catch(err => {
      status(404).json({ message: "Booooooop? " });
    });
});




module.exports = router;


 