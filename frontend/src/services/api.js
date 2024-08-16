
//every thing should have create read update delete

// skateboard builds
export async function fecthAllBuilds(){
    try{
        const response = await fetch('/api/skateboardBuilds')
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}
export async function fetchBuild(id){
    try{
        const response = await fetch(`/api/skateboardBuilds/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}
// decks
export async function fetchAllDecks(){
    try{
        const response = await fetch('/api/decks/')
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}
export async function fetchDeck(id){
    try{
        const response = await fetch(`/api/decks/${id}`)
        const data = await response.json()
        console.log('fetchDeckSet data:', data); // Add this line
        return data
    }
    catch (error) {
        console.error(error)
    }
}
export async function fetchDeckSet(deckIDs){
    if (deckIDs.length !== 0){
        const response = await fetch(`/api/decks/deckSet?id=${deckIDs.join(',')}`)
        const data = await response.json()
        if (response.ok){
            console.log(data)
        }
        return data
    }
}
// trucks
export async function fetchAllTrucks(){
    try{
        const response = await fetch('/api/trucks/')
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}
export async function fetchTruck(id){
    try{
        const response = await fetch(`/api/trucks/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}
export async function fetchTruckSet(truckIDs){
    if (truckIDs.length !== 0){
        const response = await fetch(`/api/trucks/truckSet?id=${truckIDs.join(',')}`)
        const data = await response.json()
        if (response.ok){
            console.log(data)
        }
        return data
    }
}
// wheels
export async function fetchAllWheels(){
    try{
        const response = await fetch('/api/wheels/')
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}
export async function fetchWheels(id){
    try{
        const response = await fetch(`/api/wheels/${id}`)
        const data = await response.json()
        return data
    }
    catch (error) {
        console.error(error)
    }
}
export async function fetchWheelSet(wheelIDs){
    if (wheelIDs.length !== 0){
        const response = await fetch(`/api/wheels/wheelSet?id=${wheelIDs.join(',')}`)
        const data = await response.json()
        if (response.ok){
            console.log(data)
        }
        return data
    }
}

//general


//bearings?