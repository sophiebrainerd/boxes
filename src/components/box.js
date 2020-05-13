import React, { useState } from  'react';

const Box = (props) => {
    const [color, setcolor] = useState("");

    const createBox = (e) => {
        e.preventDefault();
        const newBox = {color};
        console.log(newBox);
    };

    return (
        <div className="container">
            <form onSubmit= { createBox }>
                <label id="color" name="color">Color</label>
                <input type="text" onChange={ (e) => setcolor(e.target.value) }></input>
                <input type="submit" value="Add"></input>
            </form>
        </div>
    
    
    
    
    )

}



export default Box;