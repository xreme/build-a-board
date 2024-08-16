import { useSkateboardContext } from "../hooks/useSkateboardContext"
import { useEffect, useState } from "react"


// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const SkateboardDetails = ({skateboard,setSelectedBuild,chosenBuild}) =>{
    const {dispatch} = useSkateboardContext()
    const [allDecks, setDecks] = useState(null)
    const [allWheels, setWheels] = useState(null)
    const [allTrucks, setTrucks] = useState(null)

    useEffect(() => {
        const getParts = async () => {
            const response = await fetch('/api/decks')
            const data = await response.json()
            if (response.ok) {
                setDecks(data)
            }

            const response2 = await fetch('/api/wheels')
            const data2 = await response2.json()
            if (response2.ok) {
                setWheels(data2)
            }

            const response3 = await fetch('/api/trucks')
            const data3 = await response3.json()
            if (response3.ok) {
                setTrucks(data3)
            }
        }

        getParts()
    }, [dispatch])
    
    const handleClick = async () => {
        const response = await fetch('/api/skateboardBuilds/'+skateboard._id,{
            method: 'DELETE'
        })
        const data = await response.json()

        if (response.ok) {
           dispatch({type: 'DELETE_SKATEBOARD', payload: data})
        }
    }

    function selectBuild(id){
        setSelectedBuild(id)
    }

    const deck = allDecks && allDecks.find(d => d._id === skateboard.deckID);
    const wheel = allWheels && allWheels.find(w => w._id === skateboard.wheelsID);
    const truck = allTrucks && allTrucks.find(t => t._id === skateboard.truckID);


    return (
        <div 
            className="skateboard-details h-full" 
            style={{ backgroundColor: chosenBuild === skateboard._id ? 'lightblue' : 'white' }}
        >
            <h4>{skateboard.title}</h4>
            Deck: {deck ? deck.title : 'Unknown Deck'}<br/>
            Trucks: {truck ? truck.title: "Unknown Trucks"}<br/>
            Wheels: {wheel ? wheel.title: "Unknown Wheels"}<br/>
            <hr/>
            Created: {formatDistanceToNow(new Date(skateboard.createdAt),{addSuffix:true})} 
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    
    )
}


export default SkateboardDetails