import React from "react";
import Navigation from "../components/Navigation";
import User from "./User";


const Home = () =>{

    const apiKeys = process.env.REACT_APP_TENNIS_KEY;

    console.log(apiKeys)


    return (
        <div className="col-8 mx-auto">
            <User apiKey={apiKeys}></User>
            {/* <b>{apiKeys}</b> */}
            <input type="range" min="1" max="10" step="1" value="5" />
            </div>
    )
};

export default Home;