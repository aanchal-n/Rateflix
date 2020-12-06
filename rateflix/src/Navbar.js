import React,{Component} from 'react';
class Navbar extends Component{
    render(){
        return(
            
            <div className="card-panel">
            <div className="red-text text-darken-2" id="tap" style={{textAlign: "center",fontSize: 30, fontWeight:800}}>RATEFLIX</div>
            <div className="red-text text-darken-2"style={{textAlign: "center",fontSize: 20, fontWeight:600}}>Movies</div>
            <div className="tap-target" data-target="JPImg">
                <div className="tap-target-content">
                  <h5>Tip</h5>
                  <p>Click a poster to play audio, double click to pause</p>
                </div>
              </div>
            <nav>
            <div className="nav-wrapper">
                <form>
                    <div className="input-field">
                      <input id="search" type="search" required></input>
                      <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                      <i className="material-icons">close</i>
                    </div>
                  </form>
                </div>
                </nav>
          </div>
        )
    }
}
export default Navbar
