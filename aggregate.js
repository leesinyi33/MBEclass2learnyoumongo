var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var sz = process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) return console.error(err)
  var database = db.db('learnyoumongo')
      database.collection('prices')
      .aggregate([{$match:{size:sz}},{$group:{_id:'average',avg:{$avg:'$price'}}}])
      .toArray(function(err, avgSz){
    if (err) return console.error(err)
    console.log(Number(avgSz[0].avg).toFixed(2))
  })
  db.close()
})