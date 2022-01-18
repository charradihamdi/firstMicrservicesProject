import React ,{useState} from 'react'
import axios from 'axios'
export default ()=>{
    const [title , setTitle]=useState('')
    const onSubmit=async (event)=>{
        event.preventDefault();

        await axios.post('http://localhost:4000/posts',{
            title
        })
        setTitle('')
    }
    return <div>
        <form onSubmit={onSubmit}>
           <div className='form-group'>
                <label>TITLE</label>
                <input 
                value={title}
                onChange={e=>setTitle(e.target.value)}
                className='form-control w-2'></input>
           </div>
           <button className='btn btn-primery w-2'>Submit</button>
        </form>
    </div>
}