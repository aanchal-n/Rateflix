import React from 'react';
import ReactDOM from 'react-dom';
import FriendsImg from "./Assets/posters/TVShows/Friends.jpg"
import FriendsAudio from './Assets/Songs/TVShows-Song/Friends.mp3'
import StrangerThingsImg from './Assets/posters/TVShows/Stranger Things.jpg'
import StrangerThingsAudio from './Assets/Songs/TVShows-Song/Stranger Things.mp3'
import AmericanHorrorStoryImg from './Assets/posters/TVShows/American horror story.jpg'
import AmericanHorrorStoryAudio from './Assets/Songs/TVShows-Song/American horror story.mp3'
import BreakingBadImg from './Assets/posters/TVShows/Breaking bad.jpeg'
import BreakingBadAudio from './Assets/Songs/TVShows-Song/Breaking bad.mp3'
import BrooklynNineNineImg from './Assets/posters/TVShows/Brooklyn nine nine.jpg'
import BrooklynNineNineAudio from './Assets/Songs/TVShows-Song/Brooklyn nine nine.mp3'
import DexterImg from './Assets/posters/TVShows/Dexter.jpg'
import DexterAudio from './Assets/Songs/TVShows-Song/Dexter.mp3'
import EmilyInParisImg from './Assets/posters/TVShows/Emily in paris.jpg'
import EmilyInParisAudio from './Assets/Songs/TVShows-Song/Emily in paris.mp3'
import GameOfThronesImg from './Assets/posters/TVShows/Game of Thrones.jpg'
import GameOfThronesAudio from './Assets/Songs/TVShows-Song/Game of Thrones.mp3'
import GilmoreGirlsImg from './Assets/posters/TVShows/Gilmore girls.jpeg'
import GilmoreGirlsAudio from './Assets/Songs/TVShows-Song/Gilmore girls.mp3'
import GreysAnatomyImg from "./Assets/posters/TVShows/Grey's anatomy.jpg"
import GreysAnatomyAudio from "./Assets/Songs/TVShows-Song/Grey's anatomy.mp3"
import HowIMetYourMotherImg from './Assets/posters/TVShows/How I met your mother.jpeg'
import HowIMetYourMotherAudio from './Assets/Songs/TVShows-Song/How I met your mother.mp3'
import LockeAndKeyImg from './Assets/posters/TVShows/Locke and key.jpeg'
import LockeAndKeyAudio from './Assets/Songs/TVShows-Song/Locke and key.mp3'
import LuciferImg from './Assets/posters/TVShows/Lucifer.jpg'
import LuciferAudio from './Assets/Songs/TVShows-Song/Lucifer.mp3'
import MoneyHeistImg from './Assets/posters/TVShows/Money heist.jpg'
import MoneyHeistAudio from './Assets/Songs/TVShows-Song/Money heist.mp3'
import NewGirlImg from './Assets/posters/TVShows/New girl.jpg'
import NewGirlAudio from './Assets/Songs/TVShows-Song/New girl.mp3'
import PeakyBlindersImg from './Assets/posters/TVShows/Peaky blinders.jpg'
import PeakyBlindersAudio from './Assets/Songs/TVShows-Song/Peaky blinders.mp3'
import RiverdaleImg from './Assets/posters/TVShows/Riverdale.jpg'
import RiverdaleAudio from './Assets/Songs/TVShows-Song/Riverdale.mp3'
import Scam1992Img from './Assets/posters/TVShows/Scam 1992.jpg'
import Scam1992Audio from './Assets/Songs/TVShows-Song/Scam 1992.mp3'
import StarTrekDiscoveryImg from './Assets/posters/TVShows/Star trek discovery.jpg'
import StarTrekDiscoveryAudio from './Assets/Songs/TVShows-Song/Star trek discovery.mp3'
import SuitsImg from './Assets/posters/TVShows/Suits.jpg'
import SuitsAudio from './Assets/Songs/TVShows-Song/Suits.mp3'
import SupernaturalImg from './Assets/posters/TVShows/Supernatural.jpg'
import SupernaturalAudio from './Assets/Songs/TVShows-Song/Supernatural.mp3'
import The100Img from './Assets/posters/TVShows/The 100.jpg'
import The100Audio from './Assets/Songs/TVShows-Song/The 100.mp3'
import TheBigBangTheoryImg from './Assets/posters/TVShows/The big bang theory.jpeg'
import TheBigBangTheoryAudio from './Assets/Songs/TVShows-Song/The big bang theory.mp3'
import TheCrownImg from './Assets/posters/TVShows/The crown.jpeg'
import TheCrownAudio from './Assets/Songs/TVShows-Song/The crown.mp3'
import TheFreshPrinceOfBelAirImg from './Assets/posters/TVShows/The fresh prince of bel air.jpg'
import TheFreshPrinceOfBelAirAudio from './Assets/Songs/TVShows-Song/The fresh prince of bel air.mp3'
import TheGoodDoctorImg from './Assets/posters/TVShows/The good doctor.jpg'
import TheGoodDoctorAudio from './Assets/Songs/TVShows-Song/The good doctor.mp3'
import TheMandalorianImg from './Assets/posters/TVShows/The mandalorian.jpg'
import TheMandalorianAudio from './Assets/Songs/TVShows-Song/The mandalorian.mp3'
import TheOfficeImg from './Assets/posters/TVShows/The office.jpg'
import TheOfficeAudio from './Assets/Songs/TVShows-Song/The office.mp3'
import ThisIsUsImg from './Assets/posters/TVShows/This is us.jpg'
import ThisIsUsAudio from './Assets/Songs/TVShows-Song/This is us.mp3'
import WalkingdeadImg from './Assets/posters/TVShows/Walking dead.jpg'
import WalkingdeadAudio from './Assets/Songs/TVShows-Song/Walking dead.mp3'

const imagePath=[{
    name: 'Friends',
    isrc: FriendsImg,
    asrc: FriendsAudio
},
{
    name: 'Stranger Things',
    isrc: StrangerThingsImg,
    asrc: StrangerThingsAudio
},
{
    name: 'American horror story',
    isrc: AmericanHorrorStoryImg,
    asrc: AmericanHorrorStoryAudio
},
{
    name: 'Breaking bad',
    isrc: BreakingBadImg,
    asrc: BreakingBadAudio
},
{
    name: 'Brooklyn nine nine',
    isrc: BrooklynNineNineImg,
    asrc: BrooklynNineNineAudio
},
{
    name: 'Dexter',
    isrc: DexterImg,
    asrc: DexterAudio
},
{
    name: 'Emily in paris',
    isrc: EmilyInParisImg,
    asrc: EmilyInParisAudio
},
{
    name: 'Game of Thrones',
    isrc: GameOfThronesImg,
    asrc: GameOfThronesAudio
},
{
    name: 'Gilmore girls',
    isrc: GilmoreGirlsImg,
    asrc: GilmoreGirlsAudio
},
{
    name: "Grey's anatomy",
    isrc: GreysAnatomyImg,
    asrc: GreysAnatomyAudio
},
{
    name:'How I met your mother',
    isrc: HowIMetYourMotherImg,
    asrc: HowIMetYourMotherAudio
},
{
    name: 'Locke and key',
    isrc: LockeAndKeyImg,
    asrc: LockeAndKeyAudio
},
{
    name: 'Lucifer',
    isrc: LuciferImg,
    asrc: LuciferAudio
},
{
    name: 'Money heist',
    isrc: MoneyHeistImg,
    asrc: MoneyHeistAudio
},
{
    name: 'New girl',
    isrc: NewGirlImg,
    asrc: NewGirlAudio
},
{
    name: 'Peaky blinders',
    isrc: PeakyBlindersImg,
    asrc: PeakyBlindersAudio
},
{
    name: 'Riverdale',
    isrc: RiverdaleImg,
    asrc: RiverdaleAudio
},
{
    name: 'The mandalorian',
    isrc: TheMandalorianImg,
    asrc: TheMandalorianAudio
},
{
    name: 'Scam 1992',
    isrc: Scam1992Img,
    asrc: Scam1992Audio
},
{
    name: 'Star trek discovery',
    isrc: StarTrekDiscoveryImg,
    asrc: StarTrekDiscoveryAudio
},
{
    name: 'Suits',
    isrc: SuitsImg,
    asrc: SuitsAudio
},
{
    name: 'Supernatural',
    isrc: SupernaturalImg,
    asrc: SupernaturalAudio
},
{
    name: 'The 100',
    isrc: The100Img,
    asrc: The100Audio
},
{
    name: 'The big bang theory',
    isrc: TheBigBangTheoryImg,
    asrc: TheBigBangTheoryAudio
},
{
    name: 'The crown',
    isrc: TheCrownImg,
    asrc: TheCrownAudio
},
{
    name: 'The fresh prince of bel air',
    isrc: TheFreshPrinceOfBelAirImg,
    asrc: TheFreshPrinceOfBelAirAudio
},
{
    name: 'The good doctor',
    isrc: TheGoodDoctorImg,
    asrc: TheGoodDoctorAudio
},
{
    name: 'The office',
    isrc: TheOfficeImg,
    asrc: TheOfficeAudio
},
{
    name: 'This is us',
    isrc: ThisIsUsImg,
    asrc: ThisIsUsAudio
},
{
    name: 'Walking dead',
    isrc: WalkingdeadImg,
    asrc: WalkingdeadAudio
}
];

class Heading extends React.Component {
    render() {
        const headingstyle={
            backgroundColor: 'rgb(214,35,4)',
            fontSize: 60,
            textAlign: 'center'
        }
        return (
            <h1 style={headingstyle}>TV shows</h1>
        )
    }
}

class ShowDisplay extends React.Component {
    
    render() {
        
        var i,imgsrc,audiosrc;
        for(i=0;i<imagePath.length;i++)
        {
            if(imagePath[i].name === this.props.name)
            {
                imgsrc=imagePath[i].isrc;
                audiosrc=imagePath[i].asrc;
                break;
            }
        }
        const imgid=this.props.name+"Img"
        let audio= new Audio(audiosrc)
        const start= () => {
            audio.play();
        }

        const stop= () => {
            audio.pause();
        }
        const headerStyle={
            color:'white',
            fontSize: 20,
            fontFamily: 'Ariel',
        }
        return (
            <div>
                <h2 style={headerStyle}>{this.props.name}</h2>
                <img src={imgsrc} id={imgid} alt={this.props.name} height={300} width={300} onMouseEnter={start} onMouseLeave={stop}></img>
            </div>
        )
    }
}
class Site extends React.Component {
    render() {
        const bodyStyle={
            backgroundColor:'black'
        };
        return(
            <body style={bodyStyle}>
                <Heading />
                <hr></hr>
                <ShowDisplay name="Friends" />
                <ShowDisplay name="Stranger Things" />
                <ShowDisplay name="American horror story" />
                <ShowDisplay name="Breaking bad" />
                <ShowDisplay name="Brooklyn nine nine" />
                <ShowDisplay name="Dexter" />
                <ShowDisplay name="Emily in paris" />
                <ShowDisplay name="Game of Thrones" />
                <ShowDisplay name="Gilmore girls" />
                <ShowDisplay name="Grey's anatomy" />
                <ShowDisplay name="How I met your mother" />
                <ShowDisplay name="Locke and key" />
                <ShowDisplay name="Lucifer" />
                <ShowDisplay name="Money heist" />
                <ShowDisplay name="New girl" />
                <ShowDisplay name="Peaky blinders" />
                <ShowDisplay name="Riverdale" />
                <ShowDisplay name="Scam 1992" />
                <ShowDisplay name="Star trek discovery" />
                <ShowDisplay name="Suits" />
                <ShowDisplay name="Supernatural" />
                <ShowDisplay name="The 100" />
                <ShowDisplay name="The big bang theory" />
                <ShowDisplay name="The crown" />
                <ShowDisplay name="The fresh prince of bel air" />
                <ShowDisplay name="The good doctor" />
                <ShowDisplay name="The mandalorian" />
                <ShowDisplay name="The office" />
                <ShowDisplay name="This is us" />
                <ShowDisplay name="Walking dead" />
            </body>
        )
    }
}

export default Site