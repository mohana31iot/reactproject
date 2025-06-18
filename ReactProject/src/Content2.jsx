import React from 'react';
import  './Apply.css'
import { FaTrash } from "react-icons/fa";
const Content2 = ({gamess,handleChanges,handleDelete}) =>{
    
return(
<main>
    <ul>
        {gamess.map(
            (play) =>(
                <li className='playtime' key={play.id}>
                    <input
                    type='checkbox'
                    onChange={() => handleChanges(play.id)}
                    checked={play.checked}
                    />
                    <label>{play.game}</label>
                    <FaTrash role='button' onClick={() => handleDelete(play.id)} />
                </li>
            )
        )
        }
    </ul>
</main>
)
}
export default Content2