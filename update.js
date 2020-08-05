var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db) {
  if (err) return console.error(err)
  var database = db.db('learnyoumongo')
      database.collection('users')
      .update({username:'tinatime'}, {$set:{age: 40}}, function(err, data) {
      	if (err) return console.error(err)
      		console.log('Updated!')
      })
  db.close()
})