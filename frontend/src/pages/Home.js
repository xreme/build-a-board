import { useSkateboardContext } from "../hooks/useSkateboardContext"
import { useEffect, useState } from "react"
import useRequiredParts from "../hooks/useRequiredParts"
import { fecthAllBuilds, fetchDeckSet,fetchTruckSet,fetchWheelSet } from "../services/api"
import { useFetchBuildById } from "../services/useQueries"
// componenets
import ItemCardList from "../components/ItemCardList"
import ViewSkateboardDetails from "../components/ViewSkateboardDetails"
const Home = () => {
   const {skateboardBuilds, dispatch} = useSkateboardContext()
    const [selectedBuild, setSelectedBuild] = useState(null)
    const {deckIDs, wheelIDs, truckIDs} = useRequiredParts(skateboardBuilds)

    const testBuild = useFetchBuildById('66b10b40c0387b944e8f729a')

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
        fetchData()
    }, [dispatch])

    useEffect(() => {
        async function getParts(){
            try{
                var decks = await fetchDeckSet(deckIDs)
                var trucks = await fetchTruckSet(truckIDs)
                var wheels = await fetchWheelSet(wheelIDs)
                
                console.log([decks,trucks,wheels])
            }
            catch (error){
                console.log('error!:', error)
            }
        }
        getParts()
    },[deckIDs])

    return (
        <div className={`h-[80vh] flex flex-row ${selectedBuild? 'justify-center':'justify-center'}`}>
            {/* build list */}
            <div className={`skateboards h-full basis-1/3`}>
                {skateboardBuilds && 
                    <ItemCardList
                       listItems = {skateboardBuilds}
                       selectedItem = {selectedBuild}
                       setSelectedItem = {setSelectedBuild}
                       variant = {'skateboardBuildList'}
                    />
                }
            </div>
            {/* build editor */}
            {selectedBuild &&
                <div className={`basis-1/3 h-full bg-blue-50  ${selectedBuild? 'visible':'invisible'}`}>
                    <ViewSkateboardDetails skateboardBuild = {selectedBuild}/>
                </div>
            }
            {/* part list */}
            {/* {skateboardBuilds && 
                <div className="skateboards h-full basis-1/3'"> 
                    <ItemCardList
                         listItems = {skateboardBuilds}
                         selectedItem = {selectedBuild}
                         setSelectedItem = {setSelectedBuild}
                         variant = {'partList'}
                    />
                </div>
            } */}
            {
                testBuild.isPending?
                <div>loading...</div>:
                <div>
                    {testBuild.data.deckID}
                </div>
            }
        </div>
    )
}

export default Home