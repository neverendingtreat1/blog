var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

var getAllPosts = (cb) => {
    connection.query('SELECT * FROM posts', (err, posts) => {
        if (err) {
          cb(err, null)
        } else {
            cb(null, posts)
        }
    })
};

// var getSpecificUser = function(name, cb) {
//     connection.query(`SELECT * FROM users WHERE name = ?;`,[name], (err, user) => {
//         if (err) {
//           cb(err, null)
//         } else {
//           cb(null, user)
//         }
//     })
// };



module.exports.getAllPosts = getAllPosts;
// module.exports.getSpecificUser = getSpecificUser
