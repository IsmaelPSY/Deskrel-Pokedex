import axios from "axios"

const getPokemonByUrl = async (URL)=>{
    const req = await axios.get(URL);
    return req;
}
export default getPokemonByUrl;