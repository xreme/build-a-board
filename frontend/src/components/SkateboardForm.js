import { useState } from 'react';
import { useSkateboardContext } from "../hooks/useSkateboardContext"

const SkateboardForm = () => {
    const{dispatch} = useSkateboardContext()
    const [title,setTitle] = useState('');
    const [deckID,setDeckID] = useState('');
    const [truckID,setTruckID] = useState('');
    const [wheelsID,setWheelsID] = useState('');
    const [bearingsID,setBearingsID] = useState('');
    const [error,setError] = useState('');
    const [emptyFields, setEmpyFields] = useState([])

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const newSkateboard = {title,deckID,truckID,wheelsID,bearingsID};

        const response = await fetch('/api/skateboardBuilds',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSkateboard)
        })

        const responseJSON = await response.json();

        if (!response.ok) {
            setError(responseJSON.error)
            setEmpyFields(responseJSON.emptyFields)

        } else {
            setTitle('')
            setDeckID('')
            setTruckID('')
            setWheelsID('')
            setBearingsID('')
            setError(null)
            setEmpyFields([])
            console.log('skateboard created!',responseJSON)
            dispatch({type: 'CREATE_SKATEBOARD', payload: responseJSON})
        }
        
    }


    return (
        <form className='Create' onSubmit={handleSubmit}>
            <h3> New Build</h3>

            <label>Title</label>
            <input 
                type="text" 
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                // add a class of error if the field is empty
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Deck</label>
            <input 
                type="Number" 
                value={deckID}
                onChange={(event) => setDeckID(event.target.value)}
                className={emptyFields.includes('deckID') ? 'error' : ''}
            />

            <label>Trucks</label>
            <button>Choose Deck</button>
            <input 
                type="Number" 
                value={truckID} 
                onChange={(event) => setTruckID(event.target.value)}
                className={emptyFields.includes('truckID') ? 'error' : ''}
            />

            <label>Wheels</label>
            <input 
                type="Number" 
                value={wheelsID}
                onChange={(event) => setWheelsID(event.target.value)}
                className={emptyFields.includes('wheelsID') ? 'error' : ''}
            />

            <label>Bearings</label>
            <input 
                type="Number" 
                value={bearingsID}
                onChange={(event) => setBearingsID(event.target.value)}
                className={emptyFields.includes('bearingsID') ? 'error' : ''}
            />

            <button type="submit">Create</button>
            {error && <div className='error'>{error}</div>}

        </form>
    )

}

export default SkateboardForm