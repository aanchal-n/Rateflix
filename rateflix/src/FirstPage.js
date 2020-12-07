import React from 'react'
import ReactDOM from 'react-dom'
import TVShows from './TVShows'
import axios from 'axios'
import Movies from './Movies'
const divStyle={
          position: 'fixed',
          top: '35%',
          left: '40%',
    }
const h1Style={
    fontSize:'400%',
    
    
}
const buttonStyle={
    fontSize: '30px',
    borderRadius: '8px',
}
class MyMainPage extends React.Component {
    render () {
        return (<div className="card-panel">
                <h1 className="red-text text-darken-2" style={h1Style}> RATEFLIX </h1>
                </div>
                
                )
                   
    }          
}

class MovieButton extends React.Component {
    callAPI() {
        fetch("http://localhost:4000/Movies")
        .then(req => req.url="/moviesapi")
        .catch(err => err)
    };

    componentDidMount() {
        this.callAPI();
    }
      render() {
            return (
              <button style={buttonStyle} onClick={(e) => {
                                  e.preventDefault();
                                  ReactDOM.render(
                                      <React.StrictMode>
                                        <Movies/>
                                      </React.StrictMode>,
                                      
                                    document.getElementById('root')
                                );}}>MOVIES</button>
                );
          }
    }

class TVShowButton extends React.Component {
    
    callAPI() {
        fetch("http://localhost:4000/TVShows")
        .then(req => req.url="/tvshowsapi")
        .catch(err => err)
    };

    componentDidMount() {
        this.callAPI();
    }
    
    render() {
        
          return (
            <button style={buttonStyle} onClick={(e) => {
                ReactDOM.render(
                                    <React.StrictMode>
                                        < TVShows />
                                    </React.StrictMode>,
                                    document.getElementById('root')
                                )
                            }}>TV SHOWS</button>
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

export default FinalTouch
