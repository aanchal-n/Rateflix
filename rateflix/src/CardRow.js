import React,{Component} from 'react';
import BPimg from './Assets/posters/Movies/Black Panther.jpg';
import BPaud from './Assets/Songs/Movies-Song/Black Panther.mp3';
import JPimg from './Assets/posters/Movies/Jurassic park.jpg';
import JPaud from './Assets/Songs/Movies-Song/Jurassic park.mp3';
import TBCimg from './Assets/posters/Movies/The breakfast club.jpg';
import TBCaud from './Assets/Songs/Movies-Song/The breakfast club.mp3';
import ASIBimg from './Assets/posters/Movies/A star is born.jpg';
import ASIBaud from './Assets/Songs/Movies-Song/A star is born.mp3';
import TBimg from './Assets/posters/Movies/The bodyguard.jpg';
import TBaud from './Assets/Songs/Movies-Song/The bodyguard.mp3';
import SWimg from './Assets/posters/Movies/Star wars.jpg';
import SWaud from './Assets/Songs/Movies-Song/Star wars.mp3';
import BHimg from './Assets/posters/Movies/Big hero 6.jpg';
import BHaud from './Assets/Songs/Movies-Song/Big hero 6.mp3';
import LKimg from './Assets/posters/Movies/Lion king.jpg';
import LKaud from './Assets/Songs/Movies-Song/Lion king.mp3';
import Mimg from './Assets/posters/Movies/Moana.jpg';
import Maud from './Assets/Songs/Movies-Song/Moana.mp3';
import Simg from './Assets/posters/Movies/Skyfall.jpg';
import Saud from './Assets/Songs/Movies-Song/Skyfall.mp3';
import GBimg from './Assets/posters/Movies/Ghostbusters.jpg';
import GBaud from './Assets/Songs/Movies-Song/Ghostbusters.mp3';
import DMimg from './Assets/posters/Movies/Despicable me.jpg';
import DMaud from './Assets/Songs/Movies-Song/Despicable me.mp3';
import M8img from './Assets/posters/Movies/8 mile.jpg';
import M8aud from './Assets/Songs/Movies-Song/8 Mile.mp3';
import SOMimg from './Assets/posters/Movies/Sound of music.jpg';
import SOMaud from './Assets/Songs/Movies-Song/Sound of music.mp3';
import HGimg from './Assets/posters/Movies/Hunger games.jpg';
import HGaud from './Assets/Songs/Movies-Song/Hunger games.mp3';
import HAimg from './Assets/posters/Movies/Home alone.jpg';
import HAaud from './Assets/Songs/Movies-Song/Home alone.mp3';
import SPimg from './Assets/posters/Movies/Spiderman.jpeg';
import SPaud from './Assets/Songs/Movies-Song/Spiderman.mp3';
import NYimg from './Assets/posters/Movies/New years eve.jpeg';
import NYaud from './Assets/Songs/Movies-Song/New years eve.mp3';
import MAimg from './Assets/posters/Movies/Madagascar.jpg';
import MAaud from './Assets/Songs/Movies-Song/Madagascar.mp3';
import MUimg from './Assets/posters/Movies/Mummy3.jpg';
import MUaud from './Assets/Songs/Movies-Song/Mummy3.mp3';
import JBimg from './Assets/posters/Movies/Jungle book.jpeg';
import JBaud from './Assets/Songs/Movies-Song/Jungle book.mp3';
var path=[{name:'Black Panther',
			isrc: BPimg,
			asrc: BPaud,},
			{name: 'Jurrasic Park',
			 isrc:JPimg,
			 asrc:JPaud,},
			 {name: 'The Breakfast Club',
			 isrc:TBCimg,
			 asrc:TBCaud,},
			 {name: 'A Star is Born',
			 isrc:ASIBimg,
			 asrc:ASIBaud,},
			 {name: 'The Bodyguard',
			 isrc:TBimg,
			 asrc:TBaud,},
			 {name: 'Star Wars',
			 isrc:SWimg,
			 asrc:SWaud,},
			 {name: 'Big Hero 6',
			 isrc:BHimg,
			 asrc:BHaud,},
			 {name: 'Lion King',
			 isrc:LKimg,
			 asrc:LKaud,},
			 {name: 'Moana',
			 isrc:Mimg,
			 asrc:Maud,},
			 {name: 'Skyfall',
			 isrc:Simg,
			 asrc:Saud,},
			 {name: 'Ghostbusters',
			 isrc:GBimg,
			 asrc:GBaud,},
			 {name: 'Despicable Me',
			 isrc:DMimg,
			 asrc:DMaud,},
			 {name: '8 Mile',
			 isrc:M8img,
			 asrc:M8aud,},
			 {name: 'Sound Of Music',
			 isrc:SOMimg,
			 asrc:SOMaud,},
			 {name: 'Hunger Games',
			 isrc:HGimg,
			 asrc:HGaud,},
			 {name: 'Home Alone',
			 isrc:HAimg,
			 asrc:HAaud,},
			 {name: 'Spiderverse',
			 isrc:SPimg,
			 asrc:SPaud,},
			 {name: 'New Years Eve',
			 isrc:NYimg,
			 asrc:NYaud,},
			 {name: 'Madagascar',
			 isrc:MAimg,
			 asrc:MAaud,},
			 {name: 'Mummy 3',
			 isrc:MUimg,
			 asrc:MUaud,},
			 {name: 'Jungle Book',
			 isrc:JBimg,
			 asrc:JBaud,},]

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
		<div className="col s16 m2">
	      <div className="card red">
		    <div className="card-image waves-effect waves-block waves-light">
		  <img className="activator, waves-effect waves-light" alt="Movie" src={imgsrc} width="300" height="300" onMouseEnter={start} onMouseLeave={stop}></img>
		</div>
		<div className="card-content">
		  <span className="card-title activator grey-text text-darken-4">{this.props.name}<i className="material-icons right">more_vert</i></span>
		  <p class="tooltipped" data-position="bottom" data-tooltip="7.3"><span className="fa fa-star checked"></span>
			<span className="fa fa-star checked"></span>
			<span className="fa fa-star checked"></span>
			<span className="fa fa-star"></span>
			<span className="fa fa-star"></span></p>
		</div>
	  </div>
	  </div>
		)
	}
}
class CardRow extends Component{
    render(){
        return(
			<div>
            <div className="row">
				<Card name="Black Panther"/>
				<Card name="Jurrasic Park"/>
				<Card name="The Breakfast Club"/>
				<Card name="A Star is Born"/>
				<Card name="The Bodyguard"/>
				<Card name="Star Wars"/>
			</div>
			<div className="row">
			<Card name="Big Hero 6"/>
			<Card name="Lion King"/>
			<Card name="Moana"/>
			<Card name="Skyfall"/>
			<Card name="Ghostbusters"/>
            <Card name="Despicable Me"/>
            </div>
			<div className="row">
			<Card name="8 Mile"/>
			<Card name="Sound Of Music"/>
			<Card name="Hunger Games"/>
			<Card name="Home Alone"/>
			<Card name="Spiderverse"/>
            <Card name="New Years Eve"/>

            </div>
			<div className="row">
			<Card name="Madagascar"/>
			<Card name="Mummy 3"/>
			<Card name="Jungle Book"/>
		    </div>
			</div>
            )
        }
    }
export default CardRow
