import React,{Component} from 'react';
import BPimg from 'rateflix/src/Assets/posters/Movies/Black Panther.jpg'
import BPaud from 'rateflix/src/Assets/Songs/Movies/Black Panther.jpg'
var path=[{name:'Black Panther',
			isrc: BPimg,
			asrc: BPaud,}]

class Card extends Component {
	render() {
		var i,imgsrc,audiosrc;
        for(i=0;i<path.length;i++)
        {
            if(path[i].name === this.props.name)
            {
                imgsrc=path[i].isrc;
                audiosrc=path[i].asrc;
                break;
            }
        }
        let audio= new Audio(audiosrc)
        const start= () => {
            audio.play();
        }

        const stop= () => {
            audio.pause();
        }
		return (
		<div class="col s16 m2">
	      <div class="card red">
		    <div class="card-image waves-effect waves-block waves-light">
		  <img class="activator, waves-effect waves-light" src={imgsrc} width="300" height="300" onMouseEnter={start} onMouseLeave={stop}></img>
		</div>
		<div class="card-content">
		  <span class="card-title activator grey-text text-darken-4">{this.props.name}<i class="material-icons right">more_vert</i></span>
		  <p class="tooltipped" data-position="bottom" data-tooltip="7.3"><span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star checked"></span>
			<span class="fa fa-star"></span>
			<span class="fa fa-star"></span></p>
		</div>
	  </div>
	  </div>
		)
	}
}
class CardRow extends Component{
    render(){
        return(
            <div class="row">
				<Card name="Black Panther"/>
	  		</div>
            )
        }
    }
export default CardRow
