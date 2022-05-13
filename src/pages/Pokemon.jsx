import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import getPokemonById from '../services/getPokemonById'

const Pokemon = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [ pokemonName , setPokemonName ] = useState('') 
    const [ pokemonImgUrl , setPokemonImgUrl ] = useState('')
    const [ pokemonType , setPokemonType ] = useState([])
    const [ pokemonHP , setPokemonHP ] = useState('')
    const [ pokemonAttack , setPokemonAttack ] = useState('')
    const [ pokemonDefense , setPokemonDefense ] = useState('')
    const [ pokemonSpeed , setPokemonSpeed ] = useState('')
    const [ pokemonHeight , setPokemonHeight ] = useState('')
    const [ pokemonAbilities , setPokemonAbilities ] = useState([])
    const [ pokemonMoves , setPokemonMoves ] = useState([])
    const [ pokemonWeight , setPokemonWeight ] = useState('')
    useEffect(() => {
        if(id){
            getPokemonById(id)
                .then((resp) => {
                    setPokemonName(resp.data.name)
                    setPokemonImgUrl(resp.data.sprites.other.dream_world.front_default)
                    setPokemonType(resp.data.types)
                    setPokemonHP(resp.data.stats[0].base_stat)
                    setPokemonAttack(resp.data.stats[1].base_stat)
                    setPokemonDefense(resp.data.stats[2].base_stat)
                    setPokemonSpeed(resp.data.stats[5].base_stat)
                    setPokemonHeight(resp.data.height)
                    setPokemonAbilities(resp.data.abilities)
                    setPokemonMoves(resp.data.moves)
                    setPokemonWeight(resp.data.weight)
                })
        }
    }, [id])

    return (
        <div>
            <div className='w-4/5 mx-auto text-left p-5 shadow-xl mb-10 shadow-gray-400'>
            <img className='mx-auto' src={pokemonImgUrl} alt='' />
            <p className=' text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-4xl font-black'>{pokemonName.toUpperCase()}<span>#{id}</span></p>
            <h1 className='text-xl'>Where to find it? 
            <Link className='ml-10 text-4xl font-black text-red-700' to={`/pokedex/${id}/encounters`}>Encounters</Link>
            </h1>
            <h2 className='text-2xl font-medium'>Type: {pokemonType.map(item => <span className='font-black text-2xl text-emerald-700 ml-2' key={item.slot} >{item.type.name}</span>)}</h2>
            <h2 className='text-2xl font-medium'>HP:     <span className='font-black text-2xl text-emerald-700'>{pokemonHP}</span></h2>
            <h2 className='text-2xl font-medium'>Attack: <span className='font-black text-2xl text-emerald-700'>{pokemonAttack}</span></h2>
            <h2 className='text-2xl font-medium'>Defense:<span className='font-black text-2xl text-emerald-700'> {pokemonDefense}</span></h2>
            <h2 className='text-2xl font-medium'>Speed:  <span className='font-black text-2xl text-emerald-700'>{pokemonSpeed}</span></h2>
            <h2 className='text-2xl font-medium'>Height: <span className='font-black text-2xl text-emerald-700'>{pokemonHeight}</span></h2>
            <h2 className='text-2xl font-medium'>Weight: <span className='font-black text-2xl text-emerald-700'>{pokemonWeight}</span></h2>
            <h2 className='text-2xl font-medium'>Abilities: {pokemonAbilities.map(item => <span className='font-black text-2xl text-emerald-700 ml-2' key={item.ability.name}>{item.ability.name}</span>) }</h2> 
            </div>
            <div className='w-4/5 mx-auto text-left p-5 shadow-xl mb-10 shadow-gray-400'>
            <h1 className='text-2xl mb-2 font-medium'>Movements</h1> 
            {pokemonMoves.map(item => <span className='border-4 inline-block rounded-full px-2 m-1' key={item.move.name}>{item.move.name}</span>) }
            </div>

            
            <button className='rounded-full bg-stone-600 w-15 px-3 py-1 text-center text-white fixed right-5 bottom-5' onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}

export default Pokemon;