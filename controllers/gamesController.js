var express = require("express");
var router = express.Router();

var game = require("../models/game.js");

router.get("/", function (req, res) {
  game.all(function (data) {
    var hbsObject = { games: data };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/games", function (req, res) {
  game.create("name", req.body.name, function (result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/games/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  game.update(req.body, condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else { res.status(200).end(); }
  });
});

router.delete("/api/games/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  game.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else { res.status(200).end(); }
  });
});

module.exports = router;
