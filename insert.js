var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var firstN = process.argv[2]
var lastN = process.argv[3]

mongo.connect(url, function(err, db) {
  if (err) return console.error(err)
  var database = db.db('learnyoumongo')
	var doc = {firstName: firstN, lastName: lastN}
      database.collection('users')
      .insert(doc, function(err, data) {
      	if (err) return console.error(err)
      		console.log(JSON.stringify(doc))
      })
  db.close()
})