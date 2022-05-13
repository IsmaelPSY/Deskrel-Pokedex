import axios from "axios";

const getAllPokemons = async(limit = 20)=>{
    const URL = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`;
    const req = await axios.get(URL);
    return req;
}
export default getAllPokemons;