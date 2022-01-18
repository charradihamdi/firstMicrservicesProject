const express = require('express')
const bodyParser = require('body-parser')
const cors =require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts={}

app.get('/post',(req,res)=>{

})
app.post('/events',(req,res)=>{

})
app.listen(4003,()=>{
    console.log('listenning in port 4003')
})