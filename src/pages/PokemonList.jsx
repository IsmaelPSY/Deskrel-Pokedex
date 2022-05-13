import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PokeCard from "../components/PokeCard"
import getAllPokemons from "../services/getAllPokemons"
import getPokemonsType from "../services/getPokemonsType"

const PokemonList = () => {

    const user = useSelector( state => state.userName)

    const navigate = useNavigate()

    const [pokemonListAll, setPokemonListAll] = useState([])
    const [ pokemonTypes , setPokemonTypes ] = useState([])
    const [ typeSearch , setTypeSearch ] = useState('')
    const [ pokemonListType , setPokemonListType ] = useState([])

    useEffect(()=>{
        getPokemonsType()
            .then(resp =>{
                setPokemonTypes(resp.data.results)
            })
    },[])
    useEffect(()=>{
        if(typeSearch){
        getPokemonsType(typeSearch)
            .then(resp=>{
                setPokemonListType(resp.data.pokemon)
            })
        }else{
            getAllPokemons(10)
            .then((resp) => {
                setPokemonListAll(resp.data.results)
            })
        }
    },[typeSearch])
    const listAll = pokemonListAll.map((item) => <PokeCard key={item.name} pokemonUrl={item.url} />)
    const listByType = pokemonListType.map((item) => <PokeCard key={item.pokemon.name} pokemonUrl={item.pokemon.url} />)
    const listType = pokemonTypes.map(item=><option key={item.name}>{item.name}</option>) 

    const handlerEnter = (e) => {
        e.key === 'Enter' && navigate(`/pokedex/${e.target.value.toLowerCase()}`)
    }

    return (
        <div> 
            <h1 className="font-medium text-red-600 m-10 text-5xl">Bienvenido {user}</h1>
            <select className="rounded-full bg-green-900 w-15 px-3 py-1 text-center text-white mx-5" onChange={(e)=>setTypeSearch(e.target.value)}>
            <option value=''>All Pokemons</option>
                {listType}
            </select>
            <input className="border-double border-4 border-green-600" onKeyPress={handlerEnter} placeholder="Search Pokemon"></input>
            <main className="grid grid-cols-2">
            { (!typeSearch 
            ?   listAll
            :   listByType
            )
            }
            </main>
        </div>
    )
}

export default PokemonList