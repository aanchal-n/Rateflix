const express = require('express')

const Ctrl = require('../controllers/rateflix-control')

const router = express.Router()

router.get('/movies',Ctrl.getMovies)
router.get('/tvshows',Ctrl.getTVShows)

module.exports = router