import SkateboardBuildCard from "./SkateboardBuildCard"
import SkateboardPartCard from "./SkateboardPartCard"
import AddNewCard from "./AddNewCard"

const ItemCardList = (props) =>{
    const {listItems, selectedItem, setSelectedItem, variant} = props
    
    return(
        <div className="h-full w-full justify-center mx-2">
            {listItems.map((item, i) =>(
                <div key={i} className="flex my-2 "
                    onClick={()=>setSelectedItem(item)} 
                >
                    {variant === 'skateboardBuildList' 
                    && (
                            <SkateboardBuildCard skateboardBuild = {item} isSelected = {item._id == selectedItem?._id}/>

                        )
                    }
                    
                    {variant === 'partList' &&
                        (<SkateboardPartCard/>)
                    } 

                </div>
            ))}
            <div
                onClick={()=>{(setSelectedItem(null))}} 
            >
                <AddNewCard/>
            </div>
        </div>
    )
}

export default ItemCardList; 