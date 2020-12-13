var orm = require("../config/orm.js");

var game = {
  // corresponding function to the orm get all
  all: function (cb) {
    orm.all("games", function (res) {
      cb(res);
    });
  },

  // corresponding function to the orm Create/Post
  create: function (cols, vals, cb) {
    orm.create("games", cols, vals, function (res) {
      cb(res);
    });
  },

  // corresponding function to the orm Update/put
  update: function (objColVals, condition, cb) {
    orm.update("games", objColVals, condition, function (res) {
      cb(res);
    });
  },

  // corresponding function to the orm delete
  delete: function (condition, cb) {
    orm.delete("games", condition, function (res) {
      cb(res);
    });
  }
};

module.exports = game;