import React from 'react'
import { FaPlus } from 'react-icons/fa6';
import './Apply.css'


const Additem = ({newgame,setNewGam,handleAddItem}) => {
  return (
    <form className='addForm' onSubmit={handleAddItem}>
        <label>Add Item</label>
        <input autoFocus
        id="addItem" type='text' placeholder='additem' value= {newgame}
        onChange={(e)=>setNewGam(e.target.value)} required /> <br></br>
         <br></br>
        <button type='submit'>
            <FaPlus />
            </button>
             <br></br>
    </form>
  )
}

export default Additem
