import React, { useEffect } from "react";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { useFetchAllBuilds, useFetchDeck, useFetchTruck, useFetchWheels} from "../services/useQueries";
const SkateboardBuildCard = (props) =>{

    const {skateboardBuild, isSelected} = props
    const {title,deckID, truckID, wheelsID, bearingsID, createdAt, updatedAt} = skateboardBuild
    
    const deck = useFetchDeck(deckID)
    const truck = useFetchTruck(truckID)
    const wheels = useFetchWheels(wheelsID)

    return(
        <div className={`p-2 w-11/12 rounded-lg bg-white shadow-md ${isSelected ? 'outline outline-yellow-200':''}`}>
            <h1 className="text-xl">
                {skateboardBuild.title} 
            </h1>
            <p>
                Deck: {deck.isFetched && deck.data.title}
            </p>
            <p>
                Trucks: {truck.isFetched && truck.data.title}
            </p>
            <p>
                Wheels: {wheels.isFetched && wheels.data.title}
            </p>
            <hr/>
            <p>
                Created: {formatDistanceToNow(new Date(skateboardBuild.createdAt),{addSuffix:true})} 
            </p>
        </div>
    )
}

export default SkateboardBuildCard