import { useEffect, useState } from "react";

export default function useRequiredParts(objects) {
  const [deckIDs, setDeckIDs] = useState([]);
  const [wheelIDs, setWheelIDs] = useState([]);
  const [truckIDs, setTruckIDs] = useState([]);
  // figure out if I really need to use a useState here or can I
  // just use a regular variable for this
  useEffect(() => {
    if (objects) {
        var wheels = [...wheelIDs]
        var trucks = [...truckIDs]
        var decks = [...deckIDs]
      for (const item of objects) {
        
        if (item.deckID && !decks.includes(item.deckID)) {
            decks.push(item.deckID)
        }
        if (item.truckID&& !trucks.includes(item.truckID)) {
            trucks.push(item.truckID)
        }
        if (item.wheelsID&& !wheels.includes(item.wheelsID)) {
            wheels.push(item.wheelsID)
        }
      }
      
      setDeckIDs(decks)
      setWheelIDs(wheels)
      setTruckIDs(trucks)
    }
  }, [objects]);
  return { deckIDs, truckIDs, wheelIDs};
}
