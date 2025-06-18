
import Courselist from './Courselist';
const ItemsList = ({game,handleChanges,handleDelete}) =>{
  return (

    <ul>
      {game.map((game)=>
      <Courselist
      key={game.id}
      game = {game}
      handleChanges={handleChanges}
      handleDelete={handleDelete}
      />
      )}
    </ul>
  )

}


export default ItemsList
