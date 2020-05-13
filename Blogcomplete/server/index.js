var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql');

var app = express();

app.use( bodyParser.json() );

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/users', (req, res) => {
  
  db.getAllPosts((err, posts) => {
    if (err) {
      res.status(401).send(err)
    }
      // console.log(posts)
      res.send(posts)
  })
});

// app.get('/api/user', (req, res) => {
//   console.log(req)
//   db.getSpecificUser(req.query.username, (err, user) => {
//     if (err) {
//       res.status(401).send(err, null)
//     } else {
//       console.log(user)
//       res.send(user)
//     }
//   })
// })

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

