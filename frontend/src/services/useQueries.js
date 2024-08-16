import {useQuery} from '@tanstack/react-query'
import { 
    fecthAllBuilds,
    fetchBuild,
    fetchAllDecks,
    fetchDeck,
    fetchDeckSet,
    fetchAllTrucks,
    fetchTruck,
    fetchTruckSet,
    fetchAllWheels,
    fetchWheels,
    fetchWheelSet
} from './api'

export const useFetchAllBuilds = () =>{
    return useQuery({
        queryKey: ['allSkateboardBuids'],
        queryFn: () => fecthAllBuilds(),
    });
}
export const useFetchBuildById = (buildId) => {
    return useQuery({
        queryKey: ['skateboardBuild', buildId],
        queryFn: () => fetchBuild(buildId),
    })
}


export const useFetchAllDecks = () => {
    return useQuery ({
        queryKey: ['allDecks'],
        queryFn: () => fetchAllDecks(),
    })
}
export const useFetchDeck = (deckId) => {
    return useQuery ({
        queryKey: ['deck', deckId],
        queryFn: () => fetchDeck(deckId),
    })
}
export const useDeckSet = (set) => {
    return useQuery ({
        queryKey: ['deckSet',set],
        queryFn: () => fetchDeckSet(set),
    })
}

export const useFetchAllTrucks= () => {
    return useQuery ({
        queryKey: ['allTrucks'],
        queryFn: () => fetchAllTrucks(),
    })
}
export const useFetchTruck= (truckId) => {
    return useQuery ({
        queryKey: ['truck', truckId],
        queryFn: () => fetchTruck(truckId),
    })
}
export const useTruckSet= (set) => {
    return useQuery ({
        queryKey: ['truckSet',set],
        queryFn: () => fetchTruckSet(set),
    })
}
 
export const useFetchAllWheels= () => {
    return useQuery ({
        queryKey: ['allWheels'],
        queryFn: () => fetchAllWheels(),
    })
}
export const useFetchWheels= (wheelsId) => {
    return useQuery ({
        queryKey: ['wheels', wheelsId],
        queryFn: () => fetchWheels(wheelsId),
    })
}
export const useWheelSet= (set) => {
    return useQuery ({
        queryKey: ['wheelSet',set],
        queryFn: () => fetchWheelSet(set),
    })
}

 