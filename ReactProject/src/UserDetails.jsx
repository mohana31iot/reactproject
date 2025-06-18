import React from 'react'
import { useParams } from 'react-router'

const UserDetails = () => {
    const obj = useParams();
    // console.log(id);
  return (
    <div>
        <h2>User Details Page</h2>
        <p>User ID: {obj.id}</p>
      
    </div>
  )
}

export default UserDetails

