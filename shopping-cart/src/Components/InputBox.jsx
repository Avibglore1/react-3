import React from 'react'

function InputBox(props){
    const handleInput = props.handleInput;
    const handleAddItem = props.handleAddItem;
   const content = props.content;
    return(
        <div className='input-box'>
            <input type="text" value = {content} onChange={handleInput}/>
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}

export default InputBox

