import React from 'react'
import ReactDOM from 'react-dom'

var Express=require('express')
var app=Express();
var TVShow=require('./TVShows');
var mongo=require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


const divStyle={
          position: 'fixed',
          top: '35%',
          left: '40%',
    }
const h1Style={
    fontSize:'400%'
}
const buttonStyle={
    fontSize: '30px',
    borderRadius: '8px',
}
class MyMainPage extends React.Component {
    render () {
        return (
                <h1 style={h1Style}> RATEFLIX </h1>)
    }
}

class MovieButton extends React.Component {
    
      render() {
            return (
              <button style={buttonStyle} onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href='./Movies.js';}}>MOVIES</button>
                );
          }
    }

class TVShowButton extends React.Component {
    
    render() {
          return (
            <button style={buttonStyle} onClick={(e) => {
                                e.preventDefault();
                                window.location.href='./TVshows.js';}}>TV SHOWS</button>
              );
        }
  }
class FinalTouch extends React.Component {
    render() {
        return (
        <div style={divStyle}>
            <MyMainPage />
            <MovieButton />
            <TVShowButton />
            </div>
        )
    }
}

app.get('/', function(req,res) {
    res.send(ReactDOM.render(<FinalTouch />,document.getElementById('root')));
})

app.listen(2000);


