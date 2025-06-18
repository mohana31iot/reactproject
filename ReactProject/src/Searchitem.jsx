import React from 'react'

const Searchitem = ({Search,setSearch}) => {

  return (
   <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
    <label>Search</label>
    <input 
    id='search'
     type='text'
      role='searchbox'
       placeholder='search Items'
    value={Search}
     onChange={(e)=>setSearch(e.target.value)} 
     /> 
    </form>
    
  )
}

export default Searchitem
