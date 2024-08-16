import { SkateboardContext } from "../context/SkateboardContext";
import { useContext } from "react";

export const useSkateboardContext = () => {
    const context = useContext(SkateboardContext)

    if(!context){
        throw new Error('useSkateboardContext must be used within a SkateboardProvider')
    }

    return context
}