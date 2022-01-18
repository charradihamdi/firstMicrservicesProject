import axios from 'axios'
import React ,{useState,useEffect}from 'react'
import CommentCreate from './Comment'
import CommantList from './CommentList'
export default function PostList() {
    const[posts,setPosts]=useState({})
    const fetchPosts = async()=>{
        const res = await axios.get('localhost:4000/')
        setPosts(res.data)
    }
    useEffect(()=>{
        fetchPosts()
    },[])
    
   const renderPosts = Object.keys(posts).map(post=>{
       console.log(posts[post].id)
       return <div className='card' style={{width:'30%',marginBottom:'20px'}}
       key={post.id}
       >
           <div className='card-body'>
               <h3>{posts[post].title.title}</h3>
               <CommantList postId={posts[post].id}/>
               <CommentCreate postId={posts[post].id}/>
              
           </div>

       </div>
   })
    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderPosts}
        </div>
    )
}
