import React,{Component} from 'react';
class Navbar extends Component{
    render(){
        return(
            
            <div class="card-panel">
            <div class="red-text text-darken-2" id="tap" style={{textAlign: "center",fontSize: 30, fontWeight:800}}>RATEFLIX</div>
            <div class="red-text text-darken-2"style={{textAlign: "center",fontSize: 20, fontWeight:600}}>Movies</div>
            <div class="tap-target" data-target="JPImg">
                <div class="tap-target-content">
                  <h5>Tip</h5>
                  <p>Click a poster to play audio, double click to pause</p>
                </div>
              </div>
            <nav>
            <div class="nav-wrapper">
                <form>
                    <div class="input-field">
                      <input id="search" type="search" required></input>
                      <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                      <i class="material-icons">close</i>
                    </div>
                  </form>
                </div>
                </nav>
          </div>
        )
    }
}
export default Navbar