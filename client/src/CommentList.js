import React ,{useState,useEffect} from 'react'
import axios from 'axios'
export default({postId})=>  {
    const [comments,setComments]=useState([])

    const fetchDate=async ()=>{
        const res =  await axios.get(`http://localhost:5000/posts/${postId}/comments`)
        setComments(res.data)
    }
    useEffect(() => {
        fetchDate()
    }, [])
    const renderComments = comments.map(comment =>{
        return <li key={comment.id}>{comment.content}</li>
    })
        return (
            <ul>
                {renderComments}
            </ul>
        )
    
}
