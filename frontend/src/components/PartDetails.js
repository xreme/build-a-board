// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useEffect, useState } from "react"
const PartDetails = ({part,displayParts,type}) =>{

    const [emptyFields, setEmpyFields] = useState([])
    const [skateboard,setSkateboard] = useState(null)
    const [wheels,setWheels] = useState(null)
    const [trucks,setTrucks] = useState(null)
    const [deck,setDeck] = useState(null)
    const [selectedPart, setSelectedPart] = useState(part)
    
    
    useEffect(() => {

        const getParts = async () => {
            
            let sb = null;

            const response4 = await fetch('/api/skateboardBuilds')
            const data4 = await response4.json()
            if (response4.ok) {
                const sb = data4.find(build => build._id  === displayParts);
                setSkateboard(sb)
                console.log('skateboard', sb)
                if(sb){
                    setParts(sb)
                }
               
            }

        }
        
        getParts()

      }, []);

    const setParts= async(sb)=>{
        const response = await fetch('/api/decks')
        const data = await response.json()
        if (response.ok) {
            const deck = data.find(d => d._id === sb.deckID);
            setDeck(deck)
            console.log('chosen Deck', deck)
        }

        const response2 = await fetch('/api/wheels')
        const data2 = await response2.json()
        if (response2.ok) {
            const wheel = data2.find(w => w._id === sb.wheelsID)
            setWheels(wheel)
            console.log('chosen Wheels', wheel)
        }

        const response3 = await fetch('/api/trucks')
        const data3 = await response3.json()
        if (response3.ok) {
            const truck = data3.find(t => t._id === sb.truckID);
            setTrucks(truck)
            console.log('chosen Trucks', truck)
        }
    }

    console.log("type:",type)

    if(type === 'deck'){
        return (
            <div className="skateboard-details"
            style={deck ? { backgroundColor: deck._id === part._id ? 'lightblue' : 'white' } : {}}
            >
                <h4>{part.title}</h4>
                <label>Brand: {part.brand}</label>
                <label>Size: {part.size}</label>
                <label>Material: {part.material}</label>
                <hr/>
                Created: {formatDistanceToNow(new Date(part.createdAt),{addSuffix:true})} 
            </div>
    
        )
    }
    if (type === 'wheels'){
        return (
            <div className="skateboard-details"
            style={wheels ? { backgroundColor: wheels._id === part._id ? 'lightblue' : 'white' } : {}}
            >
                <h4>{part.title}</h4>
                <label>Brand: {part.brand}</label>
                <hr/>
                Created: {formatDistanceToNow(new Date(part.createdAt),{addSuffix:true})} 
            </div>
    
        )
    }
    if (type === 'trucks'){
        return (
            <div className="skateboard-details"
            style={trucks ? { backgroundColor: trucks._id === part._id ? 'lightblue' : 'white' } : {}}
            >
                <h4>{part.title}</h4>
                <label>Brand: {part.brand}</label>
                <hr/>
                Created: {formatDistanceToNow(new Date(part.createdAt),{addSuffix:true})} 
            </div>
    
        )
    }
    else{
        return (
            <div className="skateboard-details">
                <h4>{part.title}</h4>
                <label>Brand: {part.brand}</label>
                <hr/>
                Created: {formatDistanceToNow(new Date(part.createdAt),{addSuffix:true})} 
            </div>
    
        )
    }


   
}


export default PartDetails