import { useState } from "react"

function InputBox(){
    const [content, setContent] = useState('');
    const handleAlert = () =>{
         alert(content);
         return setContent('');
    }

    function handleChange(e){
        const updatedvalue = e.target.value;
        return setContent(updatedvalue)
    }
    return <div>
        <input type="text" value={content} onChange={handleChange}/>
        <button onClick={handleAlert}>Alert Content</button>
    </div>
}

export default InputBox