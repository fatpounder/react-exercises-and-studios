import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);




    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }    
    return(
        <div>
            <button onClick={handleClick}>Next</button>
            <h3>data.projects[index]."equipment"</h3>
            <h3>data.projects[index]."dataType"</h3>
            <h3>data.projects[index]."time of day"</h3>
            <h3>data.projects[index]."time of day"</h3>
        </div>
    )

}