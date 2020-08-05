var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var age = process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) return console.error(err)
  var database = db.db('learnyoumongo')
      database.collection('parrots')
      .count({age: {$gt: +age}}, function(err, num){
    if (err) return console.error(err)
    console.log(num)
  })
  db.close()
})