import React from "react";
import ItemCardList from "./ItemCardList";

const ViewSkateboardDetails = (props) => {

    const {skateboardBuild} = props
    console.log(skateboardBuild)
    return(
        <div className="mx-2 grid justify-center">
            <div className="bg-slate-200 text-center h-[200px]"> 
                image goes here
            </div>
            <div className="flex flex-row justify-around w-80">
                <div className="" >
                    {skateboardBuild ? skateboardBuild?.title : '-'} 
                </div>
                <div>
                    price goes here 
                </div>
            </div>
            <div className="text-center w-80 m-2">
                {skateboardBuild? skateboardBuild.deckID : '-'} 
            </div>
            <div className="text-center w-80 m-2">
                {skateboardBuild? skateboardBuild.wheelsID: '-'}
            </div>
            <div className="text-center w-80 m-2">
               {skateboardBuild? skateboardBuild.bearingsID: '-'}
            </div>
            <div className="text-center w-80 m-2">
               {skateboardBuild? skateboardBuild.truckID: '-'}
            </div>
            <div className="text-center">
                <button className="bg-green-200 p-3"> Confirm </button>
            </div>
        </div>
    )
}

export default ViewSkateboardDetails;