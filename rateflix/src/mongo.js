/*var MongoClient = require('mongodb').MongoClient;
var url =

"mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
var myobj = [
    {
        "Title": "Friends",
        "Song": "I'll be there for you",
        "Rating": 8.9,
        "Category-1": "Comedy",
        "Category-2": "Romance",
        "Release year": 1994
      },
      {
        "Title": "Stranger Things",
        "Song": "Stranger things theme",
        "Rating": 8.8,
        "Category-1": "Drama",
        "Category-2": "Fantasy",
        "Release year": 2016
      },
      {
        "Title": "Game of Thrones",
        "Song": "Game of Thrones theme",
        "Rating": 9.3,
        "Category-1": "Action",
        "Category-2": "Drama",
        "Release year": 2011
      },
      {
        "Title": "Walking dead",
        "Song": "Walking dead theme",
        "Rating": 8.2,
        "Category-1": "Drama",
        "Category-2": "Horror",
        "Release year": 2010
      },
      {
        "Title": "Gilmore girls",
        "Song": "Where you lead",
        "Rating": 8.1,
        "Category-1": "Comedy",
        "Category-2": "Drama",
        "Release year": 2000
      },
      {
        "Title": "Lucifer",
        "Song": "They call me devil",
        "Rating": 8.2,
        "Category-1": "Crime",
        "Category-2": "Drama",
        "Release year": 2016
      },
      {
        "Title": "Money heist",
        "Song": "Bella ciao",
        "Rating": 8.4,
        "Category-1": "Action",
        "Category-2": "Crime",
        "Release year": 2017
      },
      {
        "Title": "Suits",
        "Song": "Greenback boogie",
        "Rating": 8.5,
        "Category-1": "Comedy",
        "Category-2": "Drama",
        "Release year": 2011
      },
      {
        "Title": "Supernatural",
        "Song": "Highway to hell",
        "Rating": 8.4,
        "Category-1": "Fantasy",
        "Category-2": "Horror",
        "Release year": 2005
      },
      {
        "Title": "Locke and key",
        "Song": "You should see me in a crown",
        "Rating": 7.4,
        "Category-1": "Drama",
        "Category-2": "Horror",
        "Release year": 2020
      },
      {
        "Title": "The office",
        "Song": "Theme song",
        "Rating": 8.9,
        "Category-1": "Comedy",
        "Category-2": "",
        "Release year": 2005
      },
      {
        "Title": "Brooklyn nine nine",
        "Song": "Theme song",
        "Rating": 8.4,
        "Category-1": "Comedy",
        "Category-2": "Crime",
        "Release year": 2013
      },
      {
        "Title": "How I met your mother",
        "Song": "Hey beautiful",
        "Rating": 8.3,
        "Category-1": "Comedy",
        "Category-2": "Romance",
        "Release year": 2005
      },
      {
        "Title": "The crown",
        "Song": "Main title theme",
        "Rating": 8.7,
        "Category-1": "Drama",
        "Category-2": "History",
        "Release year": 2016
      },
      {
        "Title": "The mandalorian",
        "Song": "Main theme",
        "Rating": 8.7,
        "Category-1": "Action",
        "Category-2": "Sci-Fi",
        "Release year": 2019
      },
      {
        "Title": "Grey's anatomy",
        "Song": "Chasing cars",
        "Rating": 7.6,
        "Category-1": "Drama",
        "Category-2": "Romance",
        "Release year": 2005
      },
      {
        "Title": "American horror story",
        "Song": "Tonight you belong to me",
        "Rating": 8,
        "Category-1": "Drama",
        "Category-2": "Horror",
        "Release year": 2011
      },
      {
        "Title": "Star trek discovery",
        "Song": "Time traveller",
        "Rating": 7.3,
        "Category-1": "Action",
        "Category-2": "Drama",
        "Release year": 2017
      },
      {
        "Title": "This is us",
        "Song": "I won't give up",
        "Rating": 8.7,
        "Category-1": "Comedy",
        "Category-2": "Drama",
        "Release year": 2016
      },
      {
        "Title": "Peaky blinders",
        "Song": "Red right hand",
        "Rating": 8.8,
        "Category-1": "Crime",
        "Category-2": "Drama",
        "Release year": 2013
      },
      {
        "Title": "Scam 1992",
        "Song": "Cobra killer",
        "Rating": 9.5,
        "Category-1": "Crime",
        "Category-2": "Drama",
        "Release year": 2020
      },
      {
        "Title": "Breaking bad",
        "Song": "Main title theme",
        "Rating": 9.5,
        "Category-1": "Crime",
        "Category-2": "Drama",
        "Release year": 2008
      },
      {
        "Title": "The fresh prince of bel air",
        "Song": "The fresh prince of bel air",
        "Rating": 7.9,
        "Category-1": "Comedy",
        "Category-2": "",
        "Release year": 1990
      },
      {
        "Title": "Dexter",
        "Song": "Theme track",
        "Rating": 8.6,
        "Category-1": "Crime",
        "Category-2": "Drama",
        "Release year": 2006
      },
      {
        "Title": "The 100",
        "Song": "Radioactive",
        "Rating": 7.6,
        "Category-1": "Drama",
        "Category-2": "Sci-Fi",
        "Release year": 2014
      },
      {
        "Title": "Emily in paris",
        "Song": "La vie en rose",
        "Rating": 7.1,
        "Category-1": "Comedy",
        "Category-2": "Drama",
        "Release year": 2020
      },
      {
        "Title": "The big bang theory",
        "Song": "eye of the tiger",
        "Rating": 8.1,
        "Category-1": "Comedy",
        "Category-2": "Romance",
        "Release year": 2007
      },
      {
        "Title": "Riverdale",
        "Song": "Thunder",
        "Rating": 6.9,
        "Category-1": "Crime",
        "Category-2": "Drama",
        "Release year": 2017
      },
      {
        "Title": "The good doctor",
        "Song": "Angel by the wings",
        "Rating": 8.2,
        "Category-1": "Drama",
        "Category-2": "",
        "Release year": 2017
      },
      {
        "Title": "New girl",
        "Song": 22,
        "Rating": 7.7,
        "Category-1": "Comedy",
        "Category-2": "",
        "Release year": 2011
      }
]
dbo.collection("TV shows").insertMany(myobj, function(err, res) {
if (err) throw err;
console.log("Number of documents inserted: " + res.insertedCount);
db.close();
});
});
*/

var MongoClient = require('mongodb').MongoClient;
var url ="mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("mydb");
var myobj = [
    {
      "Title": "Black Panther",
      "Song": "Black panther",
      "Rating": 7.3,
      "Category-1": "Action",
      "Category-2": "Sci-Fi",
      "Year": 2018
    },
    {
      "Title": "Jurassic park",
      "Song": "Jurassic park theme music",
      "Rating": 8.1,
      "Category-1": "Action",
      "Category-2": "Sci-Fi",
      "Year": 1993
    },
    {
      "Title": "The breakfast club",
      "Song": "Don't you (forget about me)",
      "Rating": 7.8,
      "Category-1": "Comedy",
      "Category-2": "Drama",
      "Year": 1985
    },
    {
      "Title": "A star is born",
      "Song": "Shallow",
      "Rating": 7.6,
      "Category-1": "Drama",
      "Category-2": "Music",
      "Year": 2018
    },
    {
      "Title": "The bodyguard",
      "Song": "I will always love you",
      "Rating": 6.3,
      "Category-1": "Action",
      "Category-2": "Drama",
      "Year": 1992
    },
    {
      "Title": "Star wars",
      "Song": "imperial march",
      "Rating": 8.6,
      "Category-1": "Action",
      "Category-2": "Sci-Fi",
      "Year": 1977
    },
    {
      "Title": "Big hero 6",
      "Song": "Immortals",
      "Rating": 7.8,
      "Category-1": "Action",
      "Category-2": "Adventure",
      "Year": 2014
    },
    {
      "Title": "Lion king",
      "Song": "Hakuna matata",
      "Rating": 8.5,
      "Category-1": "Adventure",
      "Category-2": "Drama",
      "Year": 1994
    },
    {
      "Title": "Moana",
      "Song": "How far i'll go",
      "Rating": 7.6,
      "Category-1": "Adventure",
      "Category-2": "Comedy",
      "Year": 2016
    },
    {
      "Title": "Skyfall",
      "Song": "Skyfall",
      "Rating": 7.7,
      "Category-1": "Action",
      "Category-2": "Thriller",
      "Year": 2012
    },
    {
      "Title": "Ghostbusters",
      "Song": "Ghostbusters",
      "Rating": 7.8,
      "Category-1": "Comedy",
      "Category-2": "Fantasy",
      "Year": 1984
    },
    {
      "Title": "Despicable me",
      "Song": "Happy",
      "Rating": 7.6,
      "Category-1": "Comedy",
      "Category-2": "Crime",
      "Year": 2010
    },
    {
      "Title": "8 Mile",
      "Song": "Lose yourself",
      "Rating": 7.1,
      "Category-1": "Drama",
      "Category-2": "Music",
      "Year": 2002
    },
    {
      "Title": "Sound of music",
      "Song": "My favourite things",
      "Rating": 8,
      "Category-1": "Family",
      "Category-2": "Drama",
      "Year": 1965
    },
    {
      "Title": "Hunger games",
      "Song": "Safe and sound",
      "Rating": 7.2,
      "Category-1": "Action",
      "Category-2": "Sci-Fi",
      "Year": 2012
    },
    {
      "Title": "Home alone",
      "Song": "O holy night",
      "Rating": 7.6,
      "Category-1": "Comedy",
      "Category-2": "Family",
      "Year": 1990
    },
    {
      "Title": "Spiderman: into the spider verse",
      "Song": "Sunflower",
      "Rating": 8.4,
      "Category-1": "Action",
      "Category-2": "Adventure",
      "Year": 2018
    },
    {
      "Title": "New years eve",
      "Song": "Auld lang syne",
      "Rating": 5.7,
      "Category-1": "Comedy",
      "Category-2": "Romance",
      "Year": 2011
    },
    {
      "Title": "Madagascar",
      "Song": "I like to move it",
      "Rating": 6.9,
      "Category-1": "Adventure",
      "Category-2": "Comedy",
      "Year": 2005
    },
    {
      "Title": "Mummy3",
      "Song": "My sweet eternal love",
      "Rating": 5.2,
      "Category-1": "Action",
      "Category-2": "Adventure",
      "Year": 2008
    },
    {
      "Title": "Frozen",
      "Song": "Let it go",
      "Rating": 7.4,
      "Category-1": "Adventure",
      "Category-2": "Comedy",
      "Year": 2013
    },
    {
      "Title": "Pitch perfect 2",
      "Song": "Flashlight",
      "Rating": 6.4,
      "Category-1": "Comedy",
      "Category-2": "Music",
      "Year": 2015
    },
    {
      "Title": "Jungle book",
      "Song": "bare necessities",
      "Rating": 7.4,
      "Category-1": "Adventure",
      "Category-2": "Family",
      "Year": 2016
    },
    {
      "Title": "Men in black",
      "Song": "Men in black",
      "Rating": 7.3,
      "Category-1": "Action",
      "Category-2": "Adventure",
      "Year": 1997
    }
  ]
dbo.collection("Movies").insertMany(myobj, function(err, res) {
if (err) throw err;
console.log("Number of documents inserted: " + res.insertedCount);
db.close();
});
});