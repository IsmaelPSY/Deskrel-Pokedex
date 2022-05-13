import { useEffect, useState, useSyncExternalStore } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EncounterCard from "../components/EncounterCard";
import getEncounters from "../services/getEncounters";

const Encounters =  () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [ encounters , setEncounters ] = useState([]) 

    useEffect(()=>{
        getEncounters(id)
            .then(resp => {
                setEncounters(resp.data)
            })
    },[])

    const list = encounters.map(item=><EncounterCard key={item.location_area.name} encounterObj={item}/>)

    return (
        <div>
            <button className='rounded-full bg-stone-600 w-15 px-3 py-1 text-center text-white fixed right-5 bottom-5' onClick={()=>navigate(-1)}>Back</button>

            {list}
        </div>
    )
}
export default Encounters;