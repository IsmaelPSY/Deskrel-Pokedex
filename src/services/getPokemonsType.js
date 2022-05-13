import axios from "axios";
const getPokemonsType = async(type='')=>{
    const URL = `https://pokeapi.co/api/v2/type/${type}`;
    const req = await axios.get(URL)
    return req
}
export default getPokemonsType