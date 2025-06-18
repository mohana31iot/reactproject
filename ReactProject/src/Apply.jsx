
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useState, useEffect ,useMemo, useCallback, useReducer} from 'react';
import Apirequest from './Apirequest.jsx';
import './Apply.css'
import Additem from './Additem.jsx'
import Searchitem from './Searchitem'
import Content from './Content.jsx'
import{Routes,Route} from 'react-router-dom'
import UserList from './UserList'
import UserDetails from './UserDetails.jsx'
import { UserProvider } from './UserContext.jsx';
import Profile from './Profile';
import Useref from './Useref.jsx';
import Callhead from './Callhead.jsx';
import useLocalStorage from '../Hooks/useLocalStorage.jsx';

 


function Apply() {
const[newgam,setNewGam] = useState('');
 

   const [gamess, setGames] = useState([ ]);
    const [Search,setSearch] = useState('');
    const [fetchError,setfetchError] = useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const API_URL ="http://localhost:3000/games";
    console.log(API_URL);

    const [number, Setnumber] =useState(0);
    const [counter, SetCounter] =useState(0);
    const [count, setCount] =useState(0);
    const [name, Setname] =useLocalStorage('userName','')
    const [id, SetId] = useLocalStorage('userId','')
    const newFunction = useCallback(() => {},[])
    const initialState = { Count: 0}

    const reducer = (State, action) => {
        switch (action.type) {
            case 'increase':
                return { Count: State.Count +1}
                case 'decrease':
                    return { Count: State.Count -1}
                    case 'input':
                        return { Count: action.value}
                        default:
                            return State
        }
    }
    const [State, dispatch] = useReducer(reducer, initialState)
    function cubeNum(num){
        console.log("Calculation done!");
        return Math.pow(num,3)
        
    }

    useEffect(() =>{
        const fetchGames = async () =>{
            try{
                const response = await fetch(API_URL);
                console.log(response);
                if(!response.ok) throw Error("Data not Received")
                    const gameItems = await response.json();
                console.log(gameItems);
                setGames(gameItems);
                setfetchError(null)
            }
            catch(error){
                console.log(error); 
                setfetchError(error.message);
            }
            finally{
                setIsLoading(false)
            }}
            setTimeout(()=>{
                (async () => fetchGames())()
            },3000)
    },[])
      

    async function handlechanges(id){
        const GamesItems = gamess.map((games) =>
        games.id === id? {...games, checked:!games.checked}:games)
        setGames(GamesItems)
        const myGame = GamesItems.find(game => game.id === id);
        console.log(myGame);
        const updateOptions = {
            method:'PATCH',
            Headers:{ 'Content-Type':'application/json'},
            body: JSON.stringify({checked:myGame.checked})
        }
        const reqUrl = `${API_URL}/${id}`;
        const result = await Apirequest({url:reqUrl, optionsObj: updateOptions});
        if(result) setfetchError(result);
    }

async function handleDelete(id){
    const gamesItem = gamess.filter((games) =>
    games.id !== id)
    setGames(gamesItem)
    const deleteOptions ={ method:'DELETE'}
    const reqUrl =`${API_URL}/${id}`;
    const result = await Apirequest({url: reqUrl, optionsObj: deleteOptions});
    if(result) setfetchError(result);
    
}


function handleAddItem(e){
  e.preventDefault();
  if(!newgam || gamess.some(a => a.game.toLowerCase() === newgam.toLowerCase())) return alert("already games added...");
  console.log(newgam);
  handleNewAddItem(newgam)
  setNewGam('');
// JSON.parse(localStorage.getItem(''));

}
async function handleNewAddItem(game){
  const id = gamess.length ? parseInt(gamess[gamess.length-1].id)+1 :1;
  console.log(typeof(id));
  const addNewItems = {id,checked:false,game :game}
  const gameItems =[...gamess, addNewItems]
  console.log(addNewItems)
  setGames(gameItems)
//   localStorage.setItem("Todo-List", JSON.stringify(gameItems))

  const postOptions = {
    method:'POST',
    Headers:{ 'Content-Type':'application/json'},
    body: JSON.stringify(addNewItems),
  };
  const result = await Apirequest({url: API_URL, optionsObj: postOptions});
  if(result) setfetchError(result);
  

}

const result = useMemo(() => cubeNum(number),[number])
  return(

    <div className='Apply'>
        <>
        <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:id" element={<UserDetails />} />
            </Routes>
            </> <br></br>

            <UserProvider>
                <h1> Context API</h1>
                    <Profile />
            </UserProvider>

            <Useref/>
            <>
 <br></br>
<br></br>         
  <h1> UseMemo </h1>
            <input type="number"
            onChange={ (e) => { Setnumber(e.target.value)}}
            value={number}
            />
            <h1>Cube of the number:{result}</h1>
            <button onClick={() => {SetCounter(counter+1)}} >Counter++</button>
            <h1>Counter: {counter}</h1>
            </>
            <br></br>
            <> 
            <Callhead
            newFunction ={newFunction}
            />
            <br></br>
            <h1>Use Callback {count}</h1>
            <button
            onClick={()=>{setCount(count+1)}}>Click here!</button>
            <br></br>
            </>
            
            <>
            <br></br>
            <br></br>
            <h1>UseReducer Hook {State.Count}</h1>
            <button onClick={() => dispatch({ type: 'increase'})}
            >Increase</button>
             <button onClick={() => dispatch({ type: 'decrease'})}
            >Decrease</button>
            <input
            type='number' value={State.Count}
            onChange={(e) =>
                dispatch({ type: 'input', value: Number(e.target.value)})
            }
            /><br></br>
            </>

             <>
     <h1>Custom Hook</h1>
     <h1>{name}</h1>
     <h1>{id}</h1>
     <input type="text" placeholder="Enter Your Name"
     onChange={(e)=> Setname(e.target.value)} />
     <input type="text" placeholder="Enter your Id" value={id} onChange={(e)=> SetId(e.target.value)}/>
     </> <br></br>
<br></br>
      <Header
      title='React Js To do list'
     
      /> <br></br>
      <Additem 
      newgam = {newgam}
      setNewGam = {setNewGam}
      handleAddItem={handleAddItem}
      /> <br></br>

      <Searchitem 
      Search={Search}
      setSearch={setSearch} />
      <br></br>
     <main> {isLoading && <p>Loading Items.....</p>}
     {fetchError && <p>{`Error: ${fetchError}`}</p>}
     {!isLoading && !fetchError &&

     <Content 
     
 game = {gamess.filter(course =>((course.game).toLowerCase()).includes((Search).toLowerCase()))     }
      handleChanges={handlechanges}
      handleDelete={handleDelete}

     />}</main> 
     

    

     
      <Footer
      length={gamess.length}
      />
      </div>

  )
   
  }
export default Apply

