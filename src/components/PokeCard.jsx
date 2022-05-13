import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getPokemonByUrl from '../services/getPokemonByUrl'

const PokeCard = ({pokemonUrl})=>{

    const url = pokemonUrl;
    const arr = url.split('/')
    const id = arr[arr.length - 2]

    const [ pokemonName , setPokemonName ] = useState('') 
    const [ pokemonImgUrl , setPokemonImgUrl ] = useState('')
    const [ pokemonType , setPokemonType ] = useState([])
    const [ pokemonHP , setPokemonHP ] = useState('')
    const [ pokemonAttack , setPokemonAttack ] = useState('')
    const [ pokemonDefense , setPokemonDefense ] = useState('')
    const [ pokemonSpeed , setPokemonSpeed ] = useState('')


    useEffect(()=>{
        getPokemonByUrl(pokemonUrl)
        .then(resp=>{
            setPokemonName(resp.data.name)
            setPokemonImgUrl(resp.data.sprites.front_default)
            setPokemonType(resp.data.types)
            setPokemonHP(resp.data.stats[0].base_stat)
            setPokemonAttack(resp.data.stats[1].base_stat)
            setPokemonDefense(resp.data.stats[2].base_stat)
            setPokemonSpeed(resp.data.stats[5].base_stat)
        })
    },[])

   
    return(
        <Link to={`/pokedex/${id}`} className="p-5">
            <div className="bg-lime-400 grid grid-cols-3 p-5 h-full text-center">
                <div className="">
                <span>{pokemonName.toUpperCase()}</span>
                <img className="m-auto" src={pokemonImgUrl} alt='' />
                </div>
                <div className="col-span-2 text-left grid grid-cols-2">
                <span>Type:</span>
                <span>
                {pokemonType.map(item => <span className="mx-0.5" key={item.slot} >{item.type.name}</span>)}
                </span>
                <span>HP: {pokemonHP}</span>
                <span>Attack: {pokemonAttack}</span>
                <span>Defense: {pokemonDefense}</span>
                <span>Speed: {pokemonSpeed}</span>
                </div>
            </div>
        </Link>
        
    )
}
export default PokeCard;