// import { useState,useEffect } from 'react';
// import { useSkateboardContext } from "../hooks/useSkateboardContext"

// const SkateboardForm = ({ setSelectedPart, displayBuild}) => {
  
//     const [emptyFields, setEmpyFields] = useState([])
//     const [title, setTitle] = useState(displayBuild);
//     const [skateboard,setSkateboard] = useState(null)
//     const [wheels,setWheels] = useState(null)
//     const [trucks,setTrucks] = useState(null)
//     const [deck,setDeck] = useState(null)
    
    
//     useEffect(() => {
//         setTitle(displayBuild);

//         const getParts = async () => {
            
//             let sb = null;

//             const response4 = await fetch('/api/skateboardBuilds')
//             const data4 = await response4.json()
//             if (response4.ok) {
//                 const sb = data4.find(build => build._id  === displayBuild);
//                 setSkateboard(sb)
//                 console.log('skateboard', sb)
//                 if(sb){
//                     setParts(sb)
//                 }
               
//             }

//         }
        
//         getParts()

//       }, [displayBuild]);
    
//     function handleClick(type){

//         if (type === 'decks'){
//             setSelectedPart('decks')
//         }
//         else if (type === 'trucks'){
//             setSelectedPart('trucks')
//         }
//         else if (type === 'wheels'){
//             setSelectedPart('wheels')
//         }
//     }

//     const setParts= async(sb)=>{
//         const response = await fetch('/api/decks')
//             const data = await response.json()
//             if (response.ok) {
//              const deck = data.find(d => d._id === sb.deckID);
//              setDeck(deck)
//              console.log('chosen Deck', deck)
//             }
    
//             const response2 = await fetch('/api/wheels')
//             const data2 = await response2.json()
//             if (response2.ok) {
//                const wheel = data2.find(w => w._id === sb.wheelsID)
//                 setWheels(wheel)
//             }
    
//             const response3 = await fetch('/api/trucks')
//             const data3 = await response3.json()
//             if (response3.ok) {
//                 const truck = data3.find(t => t._id === sb.truckID);
//                 setTrucks(truck)
//             }
//         }

//     return (
//         <div className='BuildViewer'>
//             <div className='ImageContainer'/>
            
//             <div className='TopDisplay'>
//                 <input className='TitleInput' placeholder="TITLE" defaultValue={skateboard ?skateboard.title: ''}></input>
               
//                 <input className='PriceDisplay' placeholder="$$$" disabled ></input>
//             </div>

//             <div className='PartPicker'>

//                 {deck? <div  onClick={()=>handleClick('decks')} className='Label'>{deck.title}</div>:  <button className='PartButton' onClick={()=>handleClick('decks')}>CHOOSE DECK</button>}
//                 <br/>
//                 {trucks? <div  onClick={()=>handleClick('trucks') } className='Label'>{trucks.title}</div>: <button className='PartButton'  onClick={()=>handleClick('trucks')}>CHOOSE TRUCKS</button>}
//                 <br/>
//                 {wheels? <div  onClick={()=>handleClick('wheels')} className='Label'>{wheels.title}</div>: <button className='PartButton' onClick={()=>handleClick('wheels')} >CHOOSE WHEELS</button>}
//             </div>

//             <button className='SaveButton' >SAVE</button>
//         </div>
        
       
//     )

// }

// export default SkateboardForm