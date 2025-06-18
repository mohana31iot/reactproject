
import { FaTrash } from "react-icons/fa6";
import './Apply.css'


const Courselist = ({game,handleChanges,handleDelete}) => {
  return (
    (
        <li className='Item' >
            <input
            type='checkbox'
            onChange={()=>handleChanges(game.id)} checked={game.checked}   
            /> 
            <label>{game.game}</label>
            <FaTrash
            role='button'
            onClick={()=>handleDelete(game.id)}/> 
             </li>
    )
    
  )
}
``
export default Courselist
