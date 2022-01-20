const express = require('express')
const axios =require('axios')
const bodyParser=require('body-parser')
const {randomBytes}=require('crypto')
const cors =require('cors')

const app = express()

app.use(bodyParser.json())
app.use(cors())
const posts={}
app.get('/',(req,res)=>{
    res.send(posts)
})

app.post('/',async (req,res)=>{
    const id = randomBytes(4).toString('hex')
    const title = req.body.title
    posts[id]= {
        id,
        title
    }
   await axios.post('localhost:4005/events',{
        type:'postCreated',
        data:{
            id,title
        }
    })
    res.status(201).send(posts[id])
})
app.post('events',(req,res)=>{
    console.log('received event',req.body.type)
    res.send({})
})
app.listen(4000,()=>{
    console.log('listen 20 ');
    console.log('listenning in port 4000')
})
