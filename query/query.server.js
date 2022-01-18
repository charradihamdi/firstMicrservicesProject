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
const {type,data}= req.body 

if(type==='postCreated'){
const {id,title}= data
posts[id]={id,title,comments:[]}
}
if(type==='commentCreated'){
    const {type,data,postId}=data;
    const post = posts[postId]
    post.comments.push({id,content})
}
res.send({})
})
app.listen(4002,()=>{
    console.log('listenning in port 4002')
})