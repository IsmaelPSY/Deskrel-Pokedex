const EncounterCard = ({encounterObj})=>{   
    const nameLocationArea = encounterObj.location_area.name.split('-');
    const indexArea=nameLocationArea.indexOf('area')
    const nameLocation = nameLocationArea.slice(0,indexArea).join(' ').toUpperCase()

    return(
        <div>
            Region: {nameLocation}
        </div>
    )
}
export default EncounterCard;