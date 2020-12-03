const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        Title: {type: String},
        Song: {type: String},
        rating: {type: Number},
        Category:{type:String},
        Year:{type:Number}
    })

const TVShow = new Schema(
    {
        Title: {type: String},
        Song: {type: String},
        rating: {type: Number},
        Category:{type:String},
        Year:{type:Number}
    })

var moviedb = mongoose.model('Movie', Movie,'Rateflix')
var tvshowdb = mongoose.model('TVShow', TVShow,'Rateflix')

module.exports = {moviedb,tvshowdb}
