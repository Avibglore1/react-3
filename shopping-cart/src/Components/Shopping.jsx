import React, { useState } from 'react'

function Shopping() {
    const [content, setContent] = useState('');
    const [task, setTask] = useState([]);
    const handleAddItem = () =>{
        alert(content);
        setContent('');
    }
    const handleInput = (e) =>{
        setContent(e.target.value)
    }
    const handleDelete = () =>{

    }
  return (
    <div className='Shopping-list'>
        <div className='input-box'>
            <input type="text" value = {content} onChange={handleInput}/>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
        <div className="list">
            <li><span>Task</span><button onClick={handleDelete}>Delete</button></li>
            <li><span>Task</span><button onClick={handleDelete}>Delete</button></li>
            <li><span>Task</span><button onClick={handleDelete}>Delete</button></li>
        </div>
    </div>
  )
}

export default Shopping