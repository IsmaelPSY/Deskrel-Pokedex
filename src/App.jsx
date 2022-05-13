import { Route , Routes } from "react-router-dom"
import PokemonList from "./pages/PokemonList"
import ProtectedPages from "./pages/ProtectedPages"
import Login from "./pages/Login"
import Pokemon from "./pages/Pokemon"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Encounters from "./pages/Encounters"
import pokedexSmall from './images/image 12.png'



function App() {

const isUserName = useSelector(state => state.userName)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerOnClick = () => {
        dispatch({
            type: "@user/logout",
        })
        navigate('/')
    }

  return (
    <div>
      { isUserName && (<>
      <button className="rounded-full bg-stone-600 w-15 px-3 py-1 text-center text-white fixed right-5 top-5" onClick={handlerOnClick}>Cerrar Sesion</button>
      <img className="py-5 px-5" src={pokedexSmall} alt=""/>
      </>
      )
       }      
      <Routes>  
          <Route path='/' element={<Login/>} />
          <Route element={<ProtectedPages />} >
            <Route path='/pokedex' element={<PokemonList/>} />
            <Route path='/pokedex/:id' element={<Pokemon/>}/>
            <Route path='/pokedex/:id/encounters' element={<Encounters/>}/>
            <Route path='/settings' />
          </Route>
        </Routes>
        
    </div>
  )
}

export default App
