import React from 'react';
import{useUser} from './UserContext';

const PersonName = () => {

    const UserName = useUser();
  return (
    <div>
        <h2>This is {UserName}</h2>
    </div>
  )
}

export default PersonName
