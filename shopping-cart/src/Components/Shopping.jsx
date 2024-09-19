import React, { useState } from 'react'
import InputBox from './InputBox';
import ListItem from './ListItem';
function Shopping() {
    const [content, setContent] = useState('');
    const [tasks, setTask] = useState([]);
    const handleAddItem = () =>{
        const newItem = content;
        const newArray = [...tasks];
        newArray.push(newItem);
        setTask(newArray);
        setContent('');
    }
    const handleInput = (e) =>{
        setContent(e.target.value)
    }
    const handleDelete = (index) =>{
        const filteredArray = [];
        for (let i = 0;i<tasks.length;i++){
            if(i!=index){
                filteredArray.push(tasks[i])
            }
        }
       setTask(filteredArray);
    }
  return (
    <div className='Shopping-list'>
        <InputBox handleInput={handleInput} content = {content} handleAddItem={handleAddItem}></InputBox>
        <h2>Shopping Cart</h2>
        <ListItem handleDelete={handleDelete} tasks={tasks}></ListItem>
    </div>
)
}

export default Shopping;



