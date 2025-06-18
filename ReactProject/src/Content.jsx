

import React from 'react'
import ItemsList from './ItemsList'

const Content = ({game,handleChanges,handleDelete}) => {
  return (
    <>
     {(game.length)?(
          <ItemsList
          game={game}
          handleChanges={handleChanges}
          handleDelete={handleDelete}
          />

        ):(
          <p>Your Games List is Empty!</p>
        )
        }
  
  </>
  )
}

export default Content
