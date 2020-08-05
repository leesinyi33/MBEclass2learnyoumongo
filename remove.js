var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'+process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) return console.error(err)
  var database = db.db(process.argv[2])
      database.collection(process.argv[3])
      .remove({_id: process.argv[4]}, function(err, data) {
      	if (err) return console.error(err)
      		console.log('Removed!')
      })
  db.close()
})