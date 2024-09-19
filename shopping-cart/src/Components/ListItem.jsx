import React from 'react'

function ListItem(props){
    const handleDelete = props.handleDelete;
    const tasks = props.tasks;
   return <ul className="list">
           {    tasks.map((task,index)=>{
                return <li key={index}><span>{task}</span><button onClick={()=>{
                    handleDelete(index)
                }}>Delete</button></li>})
            }      
        </ul>
}

export default ListItem