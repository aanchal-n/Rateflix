import React from 'react'
import ReactDOM from 'react-dom'
import TVShows from './TVShows'
//import index from '../../Myapp/src/App'
import axios from 'axios'
import {Link} from 'react-router-dom'

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
                                  window.location.href='./Movies'
                                  /*ReactDOM.render(
                                    <React.StrictMode>
                                        < App />
                                    </React.StrictMode>,
                                    document.getElementById('root')
                                )*/;}}>MOVIES</button>
                );
          }
    }

class TVShowButton extends React.Component {
    constructor(props) {
        super(props);
        this.state={TVShowslist:[]}
    }
    componentDidMount() {
        axios.get('http://localhost:4000/TVShows')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    render() {
          return (
            <button style={buttonStyle} onClick={(e) => {
                                //window.location.href='./TVshows.js';
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