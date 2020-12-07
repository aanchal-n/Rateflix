import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
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
    asrc: FriendsAudio,
    year: '1994' ,
    ratings: '8.9' ,
    category: "Comedy,Romance",
},
{
    name: 'Stranger Things',
    isrc: StrangerThingsImg,
    asrc: StrangerThingsAudio,
    year: '2016' ,
    ratings: '8.8' ,
    category: "Drama,Fantasy",
},
{
    name: 'American horror story',
    isrc: AmericanHorrorStoryImg,
    asrc: AmericanHorrorStoryAudio,
    year: '2011' ,
    ratings: '8' ,
    category: "Drama,Horror",
},
{
    name: 'Breaking bad',
    isrc: BreakingBadImg,
    asrc: BreakingBadAudio,
    year: '2008' ,
    ratings: '9.5' ,
    category: "Crime,Drama",
},
{
    name: 'Brooklyn nine nine',
    isrc: BrooklynNineNineImg,
    asrc: BrooklynNineNineAudio,
    year: '2013' ,
    ratings: '8.4' ,
    category: "Comedy,Drama",
},
{
    name: 'Dexter',
    isrc: DexterImg,
    asrc: DexterAudio,
    year: '2006' ,
    ratings: '8.6' ,
    category: "Crime,Drama",
},
{
    name: 'Emily in paris',
    isrc: EmilyInParisImg,
    asrc: EmilyInParisAudio,
    year: '2020' ,
    ratings: '7.1' ,
    category: "Comedy,Drama",
},
{
    name: 'Game of Thrones',
    isrc: GameOfThronesImg,
    asrc: GameOfThronesAudio,
    year: '2011' ,
    ratings: '9.3' ,
    category: "Drama,Action",
},
{
    name: 'Gilmore girls',
    isrc: GilmoreGirlsImg,
    asrc: GilmoreGirlsAudio,
    year: '2000' ,
    ratings: '8.1' ,
    category: "Drama,Comedy",
},
{
    name: "Grey's anatomy",
    isrc: GreysAnatomyImg,
    asrc: GreysAnatomyAudio,
    year: '2005' ,
    ratings: '7.6' ,
    category: "Drama,Romance",
},
{
    name:'How I met your mother',
    isrc: HowIMetYourMotherImg,
    asrc: HowIMetYourMotherAudio,
    year: '2005' ,
    ratings: '8.3' ,
    category: "Comedy,Romance",
},
{
    name: 'Locke and key',
    isrc: LockeAndKeyImg,
    asrc: LockeAndKeyAudio,
    year: '2020' ,
    ratings: '7.4' ,
    category: "Drama,Horror",
},
{
    name: 'Lucifer',
    isrc: LuciferImg,
    asrc: LuciferAudio,
    year: '2016' ,
    ratings: '8.2' ,
    category: "Drama,Crime",
},
{
    name: 'Money heist',
    isrc: MoneyHeistImg,
    asrc: MoneyHeistAudio,
    year: '2017' ,
    ratings: '8.4' ,
    category: "Action,Crime",
},
{
    name: 'New girl',
    isrc: NewGirlImg,
    asrc: NewGirlAudio,
    year: '2011' ,
    ratings: '7.7' ,
    category: "Comedy",
},
{
    name: 'Peaky blinders',
    isrc: PeakyBlindersImg,
    asrc: PeakyBlindersAudio,
    year: '2013' ,
    ratings: '8.8' ,
    category: "Drama,Crime",
},
{
    name: 'Riverdale',
    isrc: RiverdaleImg,
    asrc: RiverdaleAudio,
    year: '2017' ,
    ratings: '6.9' ,
    category: "Drama,Crime",
},
{
    name: 'The mandalorian',
    isrc: TheMandalorianImg,
    asrc: TheMandalorianAudio,
    year: '2019' ,
    ratings: '8.7' ,
    category: "Action,Sci-fi",
},
{
    name: 'Scam 1992',
    isrc: Scam1992Img,
    asrc: Scam1992Audio,
    year: '2020' ,
    ratings: '9.5' ,
    category: "Drama,Crime",
},
{
    name: 'Star trek discovery',
    isrc: StarTrekDiscoveryImg,
    asrc: StarTrekDiscoveryAudio,
    year: '2017' ,
    ratings: '7.3' ,
    category: "Drama,Action",
},
{
    name: 'Suits',
    isrc: SuitsImg,
    asrc: SuitsAudio,
    year: '2011' ,
    ratings: '8.5' ,
    category: "Drama,Comedy",
},
{
    name: 'Supernatural',
    isrc: SupernaturalImg,
    asrc: SupernaturalAudio,
    year: '2005' ,
    ratings: '8.4' ,
    category: "Fantasy,Horror",
},
{
    name: 'The 100',
    isrc: The100Img,
    asrc: The100Audio,
    year: '2014' ,
    ratings: '7.6' ,
    category: "Drama,Sci-fi",
},
{
    name: 'The big bang theory',
    isrc: TheBigBangTheoryImg,
    asrc: TheBigBangTheoryAudio,
    year: '2007' ,
    ratings: '8.1' ,
    category: "Comedy,Romance",
},
{
    name: 'The crown',
    isrc: TheCrownImg,
    asrc: TheCrownAudio,
    year: '2016' ,
    ratings: '8.7' ,
    category: "Drama,History",
},
{
    name: 'The fresh prince of bel air',
    isrc: TheFreshPrinceOfBelAirImg,
    asrc: TheFreshPrinceOfBelAirAudio,
    year: '1990' ,
    ratings: '7.9' ,
    category: "Comedy",
},
{
    name: 'The good doctor',
    isrc: TheGoodDoctorImg,
    asrc: TheGoodDoctorAudio,
    year: '2017' ,
    ratings: '8.2' ,
    category: "Drama",
},
{
    name: 'The office',
    isrc: TheOfficeImg,
    asrc: TheOfficeAudio,
    year: '2005' ,
    ratings: '8.9' ,
    category: "Comedy",
},
{
    name: 'This is us',
    isrc: ThisIsUsImg,
    asrc: ThisIsUsAudio,
    year: '2016' ,
    ratings: '8.7' ,
    category: "Comedy,Drama",
},
{
    name: 'Walking dead',
    isrc: WalkingdeadImg,
    asrc: WalkingdeadAudio,
    year: '2010' ,
    ratings: '8.2' ,
    category: "Drama,Horror",
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
        
        var i,imgsrc,audiosrc,rating,year,genre;
        for(i=0;i<imagePath.length;i++)
        {
            if(imagePath[i].name === this.props.name)
            {
                imgsrc=imagePath[i].isrc;
                audiosrc=imagePath[i].asrc;
                rating=imagePath[i].ratings;
                year=imagePath[i].year;
                genre=imagePath[i].category;
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
        const headerStyle={
            color:'white',
            fontSize: 20,
            fontFamily: 'Ariel',
        }
        const bodyStyle={
            color:"white",
        }
        const cardBodyStyle={
            backgroundColor: "firebrick",
            width: "300px"
        }
        return (
            <Card style={{ width: '18rem', flex:1, backgroundColor:"black"}}>
            <Card.Img variant="top" src={imgsrc} width="300" height="300" onMouseEnter={start} onMouseLeave={stop} style={{alignContent:"center"}}/>
            <Card.Body style={cardBodyStyle}>
        <Card.Title style={headerStyle}>{this.props.name} ({year})</Card.Title>
        <Card.Subtitle style={{color:"white"}}> {rating} </Card.Subtitle>
            <Card.Text style={bodyStyle}> Genre: {genre}</Card.Text>
            </Card.Body>
            </Card>
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
                <CardDeck style={{display: 'flex', flexDirection: 'row', padding: '25px 50px 25px 70px'}}>
                <ShowDisplay name="This is us" />
                <ShowDisplay name="Friends" />
                <ShowDisplay name="Stranger Things" />
                <ShowDisplay name="American horror story" />
                </CardDeck>
                <CardDeck style={{display: 'flex', flexDirection: 'row', padding: '25px 50px 25px 70px'}}>               
                <ShowDisplay name="Brooklyn nine nine" />
                <ShowDisplay name="Dexter" />
                <ShowDisplay name="Emily in paris" />
                <ShowDisplay name="Game of Thrones" />
                </CardDeck> 
                <CardDeck style={{display: 'flex', flexDirection: 'row', padding: '25px 50px 25px 70px'}}>
                <ShowDisplay name="Gilmore girls" />
                <ShowDisplay name="Grey's anatomy" />
                <ShowDisplay name="How I met your mother" />
                <ShowDisplay name="Locke and key" />
                </CardDeck>
                <CardDeck style={{display: 'flex', flexDirection: 'row', padding: '25px 50px 25px 70px'}}>
                <ShowDisplay name="Lucifer" />
                <ShowDisplay name="Money heist" />
                <ShowDisplay name="New girl" />
                <ShowDisplay name="Peaky blinders" />
                </CardDeck>
                <CardDeck style={{display: 'flex', flexDirection: 'row', padding: '25px 50px 25px 70px'}}>
                <ShowDisplay name="Riverdale" />
                <ShowDisplay name="Scam 1992" />
                <ShowDisplay name="Star trek discovery" />
                <ShowDisplay name="Suits" />
                </CardDeck>
                <CardDeck style={{display: 'flex', flexDirection: 'row',padding: '25px 50px 25px 70px'}}>
                <ShowDisplay name="Supernatural" />
                <ShowDisplay name="The 100" />
                <ShowDisplay name="The big bang theory" />
                <ShowDisplay name="The crown" />
                </CardDeck>
                <CardDeck style={{display: 'flex', flexDirection: 'row', padding: '25px 50px 25px 70px'}}>
                <ShowDisplay name="The fresh prince of bel air" />
                <ShowDisplay name="The good doctor" />
                <ShowDisplay name="The mandalorian" />
                <ShowDisplay name="The office" />
                </CardDeck>
                <CardDeck style={{display: 'flex', flexDirection: 'row', padding: '25px 50px 25px 70px'}}>
                <ShowDisplay name="Walking dead" />
                <ShowDisplay name="Breaking bad" />
                </CardDeck>
            </body>
        )
    }
}

export default Site