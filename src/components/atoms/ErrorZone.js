import React from "react";

const ErrorZone = ({message}) => {

    return(
        <div className="text-danger text-center">
            <h3>{message} </h3> 
        </div>
    )



}


export default ErrorZone;