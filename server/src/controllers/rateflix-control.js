const Models=require('../models/rateflix-model')

getMovies = async (req,res) => {
    await Models.moviedb.find({}, (err,Movie) => {
        if (err) {
            return res.status(400).json({success: false,error: err})
        }

        if (!Movie.length) {
            return res.status(404).json({success:false,error:`Movie not found`})
        }
        return res.status(200).json({success:true,data:Movie})
    }).catch(err => console.log(err))
}

getTVShows = async (req,res) => {
    await Models.tvshowdb.find({}, (err,TVShow) => {
        if (err) {
            return res.status(400).json({success: false,error: err})
        }

        if (!TVShow.length) {
            return res.status(404).json({success:false,error:`TVShow not found`})
        }
        return res.status(200).json({success:true,data:TVShow})
    }).catch(err => console.log(err))
}


module.exports = {getMovies,
                    getTVShows}
