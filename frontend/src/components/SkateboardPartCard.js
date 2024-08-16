import React from "react";
const SkateboardPartCard = (props) => {

    return (
        <div className="flex flex-row w-96 justify-between bg-white">
            <div >
                <div>Part Info</div>
            </div>
            <div>
                <div className="w-[150px] h-[150px] outline">Image goes here</div>
            </div>
        </div>
    )
}

export default SkateboardPartCard;