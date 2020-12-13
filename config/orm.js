var connection = require("../config/connection.js");

//  creates an object to sql arr
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

//  orm functions
var orm = {
  // controls the querystring for all columns from table inputs
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) { throw err; }
      cb(result);
    });
  },
  //  controls the create/post querystring for the database
  create: function (table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES ('" + vals + "')";

    connection.query(queryString, vals, function (err, result) {
      if (err) { throw err; }
      cb(result);
    });
  },

  //  controls the update/put querystring for the database
  update: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) { throw err; }
      cb(result);
    });
  },

  //  controls the delete querystring for the database
  delete: function (table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function (err, result) {
      if (err) { throw err; }
      cb(result);
    });
  }
};

module.exports = orm;
