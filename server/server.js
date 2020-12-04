const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const RateflixRoutes = express.Router();

const PORT = 4000;
let TVShow = require('./src/models/rateflix-tvshow-model');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

RateflixRoutes.route('/TVShows').get(function(req, res) {
    TVShow.find(function(err, TVShows) {
        if (err) {
            console.log(err);
        } else {
            res.json(TVShows);
        }
    });
});

app.use('/', RateflixRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

