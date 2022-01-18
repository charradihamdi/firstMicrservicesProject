import React from 'react'
import PostCreate from './PostCreate'
import PostList from './PostList'
export default ()=>{
    return <div>
        <h1>Create post</h1>
        <PostCreate />
        <hr />
        <h1>posts</h1>
        <PostList />
    </div>
}