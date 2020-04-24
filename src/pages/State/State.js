import React from "react";


const Statee = (props) => {
    return <div>
        <p className="h6">{props.name}, I am home at {props.place}</p>
        <p>{props.children}</p>
    </div>


}



export default Statee;