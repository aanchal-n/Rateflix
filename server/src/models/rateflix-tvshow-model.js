const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TVShow = new Schema(
    {
        Title: {type: String},
        Song: {type: String},
        rating: {type: Number},
        Category:{type:String},
        Year:{type:Number}
    })

module.exports = mongoose.model('TVShow', TVShow)