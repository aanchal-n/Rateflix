const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

const dbMovie=require('./db/movies')
const dbTV=require('./db/tvshows')
const RateflixRouter=require('./routes/rateflix-router')

const app=express()
const apiPort=4000

app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res) => {
	res.send("Hello world!")
})

app.use('/api',RateflixRouter)

app.listen(apiPort, () => console.log(`Server running on ${apiPort}`))
