import React from 'react'

const Footer = ({length}) => {
    const year = new Date();
  return (
    <div>
      <h4>{length} of Game List </h4>
    <p>&copy; All Rights Reserved @ {year.getFullYear()}</p>
    </div>
  )
}

export default Footer
