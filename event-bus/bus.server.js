const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())

app.post('/events',(req,res)=>{
    const event = req.body
    axios.post('localhost:4000/events',event)
    axios.post('localhost:4001/events',event)
    axios.post('localhost:4002/events',event)
    res.send({status : 'ok'})
})

app.listen(4005,()=>{
    console.log('server run in port 4005')
})