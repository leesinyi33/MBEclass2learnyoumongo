var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var age = process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) return console.error(err)
  var database = db.db('learnyoumongo')
      database.collection('parrots')
      .find({age: { $gt: +age}}, {fields: { _id: 0 }})
      .toArray(function(err, documents){
    if (err) return console.error(err)
    console.log(documents)
  })
  db.close()
})