// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require('./connection');

// ORM
// =============================================================

var tableName = 'burgers';

var orm = {
  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  selectAllBurgers: function(callback) {
    var s = 'SELECT * FROM ' + tableName;

    connection.query(s, function(err, result) {
      callback(result);
    });
  },

 
  // Here our ORM is creating a simple method for adding burgers  to the database
  // Effectively, the ORM's simple addCharacter method translates into a more complex SQL INSERT statement.
  addBurger: function(character, callback) {
    // Creating a routeName so its easy to search.

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = character.name.replace(/\s+/g, '').toLowerCase();
    console.log(routeName);

    var s = 'INSERT INTO ' + tableName + ' (routeName, name, role, age, forcePoints) VALUES (?,?,?,?,?)';

    connection.query(s, [routeName, character.name, character.role, character.age, character.forcePoints], function(
      err,
      result
    ) {
      callback(result);
    });
  }
};

module.exports = orm;