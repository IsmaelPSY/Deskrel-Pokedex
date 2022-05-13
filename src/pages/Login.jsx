import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'

import pokedex from '../images/pokedex.png'

const Login = () => {

    const [userName, setUserName] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerOnClick = () => {
        dispatch({
            type: "@user/login",
            payload :userName
        })
        navigate('/pokedex')
    }

    return (
        <div className="v-screen h-screen grid place-content-center bg-yellow-100">
            <div className="bg-orange-100 text-center font-mono p-9 flex flex-col space-y-12 rounded-lg">
                <img className="m-auto" src={pokedex} alt=""/>
                <h1 className="text-red-600 font-black text-5xl">Bienvenido Entrenador</h1>
                <p className="underline decoration-pink-500">Ingresa tu nombre:</p>
                <input className="w-3/4 m-auto" onChange={(e) => setUserName(e.target.value)} />
                <button className="rounded-full bg-slate-600 w-20 m-auto" onClick={handlerOnClick}>GO!</button>
            </div>
        </div>
    )
}

export default Login