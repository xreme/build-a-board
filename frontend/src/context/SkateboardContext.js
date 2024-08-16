import {createContext, useReducer} from 'react'

// make a new context
export const SkateboardContext = createContext()

export const reducer = (state, action) => {
    console.log('skateboardBuilds', action.payload)
    switch(action.type){
        case 'GET_SKATEBOARDS':
            return{
                skateboardBuilds: action.payload
            }
        case 'CREATE_SKATEBOARD':
            return{
                skateboardBuilds:[action.payload, ...state.skateboardBuilds]
            }
        case 'DELETE_SKATEBOARD':
            return {
                skateboardBuilds: state.skateboardBuilds.filter(
                    (skateboard) => skateboard._id !== action.payload._id)
            }
        default:
            return state
        
    }
}

export const SkateboardProvider = ({children}) => {
    console.log('skateboard provider')
    const [state,dispatch] = useReducer(reducer,
        {skateboardBuilds: null}
    )

    return (
        <SkateboardContext.Provider value={{...state, dispatch}}>
            {children}
        </SkateboardContext.Provider>
    )

}