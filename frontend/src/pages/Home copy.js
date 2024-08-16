import { useSkateboardContext } from "../hooks/useSkateboardContext"
import { useEffect, useState } from "react"

// componenets
import SkateboardDetails from "../components/SkateboardDetails"
import SkateboardForm from "../components/SkateboardForm"
import PartDetails from "../components/PartDetails"

const Home = () => {
    const {skateboardBuilds, dispatch} = useSkateboardContext()
    const [allDecks, setDecks] = useState(null)
    const [allWheels, setWheels] = useState(null)
    const [allTrucks, setTrucks] = useState(null)
    const [selectedPart, setSelectedPart] = useState("decks")
    const [selectedBuild, setSelectedBuild] = useState(null)

    const [skateboard,setSkateboard] = useState(null)
    const [wheel,setWheel] = useState(null)
    const [truck,setTruck] = useState(null)
    const [deck,setDeck] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            // remember to change the route to the correct route
            // remove proxy from package.json
            console.log('fetching data')
            try{
                const response = await fetch('/api/skateboardBuilds')
                const data = await response.json()
    
                if (response.ok) {
                    dispatch({type: 'GET_SKATEBOARDS', payload: data})
                    console.log('data', data)
                    console.log('response ok!')
                }
            }
            catch (error) {
                console.log(error)
            }
           
        }
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
        fetchData()
        setSelectedBuild("decks")

    }, [dispatch])
  

    return (

        
        
        <div className="home">
            
            <div className="skateboards">
                {!skateboardBuilds && <div>Loading...</div>}
                {skateboardBuilds && skateboardBuilds.map(skateboard => (
                    <div key={skateboard._id} className="skateboard">
                        <SkateboardDetails key={skateboard._id} 
                        skateboard = {skateboard} 
                        setSelectedBuild={setSelectedBuild} 
                        chosenBuild = {selectedBuild}/>
                    </div>
                ))}
            </div>

            <div className="create" >
                <SkateboardForm  setSelectedPart={setSelectedPart}  displayBuild={selectedBuild}  />
            </div>

            <div className="skateboards">
                {!selectedPart && <div>Select a part...</div>}

                {selectedPart === 'decks' && allDecks && allDecks.map(part => (
                    <div key={part._id} className="skateboard">
                        <PartDetails key={part._id} part = {part} displayParts={selectedBuild} type="deck"/>
                    </div>
                ))}

                {selectedPart === 'wheels' && allWheels && allWheels.map(part => (
                    <div key={part._id} className="skateboard">
                        <PartDetails key={part._id} part = {part} displayParts={selectedBuild} type="wheels"/>
                    </div>
                ))}

                {selectedPart === 'trucks' && allTrucks && allTrucks.map(part => (
                    <div key={part._id} className="skateboard" >
                        <PartDetails key={part._id} part = {part} displayParts={selectedBuild} type="trucks"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home