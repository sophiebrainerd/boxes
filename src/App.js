import React from 'react';
import './index.css';
import {useState} from 'react';

function App() {
    
    const [boxen, setboxen] = useState([]);
    
    const [color, setcolor] = useState("");

    
        const createBox = (e) => {
            e.preventDefault();
            const list = [...boxen];
            list.push(color);
            setboxen(list);
        };
        
        return (
            <div className="container">
                <form onSubmit= { createBox }>
                    <label id="color" name="color">Color</label>
                    <input type="text" onChange={ (e) => setcolor(e.target.value) }></input>
                    <input type="submit" value="Add"></input>
                </form>
                <div className="box">          
                    {boxen.map ((color, i) =>
                        <div key={ i } className="box" style={{backgroundColor: color}}></div>
                    )}
                </div>
            </div>
            )
}

export default App;