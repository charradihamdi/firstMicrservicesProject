import axios from 'axios'
import React ,{useState,useEffect}from 'react'
import CommentCreate from './Comment'
export default function PostList() {
    const[posts,setPosts]=useState({})
    const fetchPosts = async()=>{
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data)
    }
    useEffect(()=>{
        fetchPosts()
    },[])
    
   const renderPosts = Object.keys(posts).map(post=>{
       console.log(posts[post].title.id)
       return <div className='card' style={{width:'30%',marginBottom:'20px'}}
       key={post.id}
       >
           <div className='card-body'>
               <h3>{posts[post].title.title}</h3>
               <CommentCreate postId={posts[post].title.id}/>
           </div>

       </div>
   })
    return (
        <div className='d-flex flex-row flex-wrap justify-content-between'>
            {renderPosts}
        </div>
    )
}
