const mongoose = require('mongoose')
var moviedata=require('../data/RateflixMoviesData.json')
var tvshowsdata=require('../data/RateflixTVShowsData.json')
var MongoClient = require('mongodb').MongoClient;

var url ="mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("Rateflix");
/*dbo.collection("Movie").insertMany(moviedata, function(err, res) {
if (err) throw err;
console.log("Number of documents inserted: " + res.insertedCount);
})
dbo.collection("TVShow").insertMany(tvshowsdata,function(err,res) {
    if (err) throw err
    console.log("Number of records inserted"+res.insertedCount);
})*/
db.close()
mongoose.connect('mongodb://127.0.0.1:27017/',{useNewUrlParser:true})
.catch(function(err) {
    console.error('Connection error',err.message)
})

const dbi=mongoose.connection
module.exports=dbi
});

