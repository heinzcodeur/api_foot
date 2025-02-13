import React from "react";
import Navigation from "../components/Navigation";
import User from "./User";
import withApiKey from "../components/context/withApiKey";


const Home = ({apiKey}) =>{

    // const apiKeys = process.env.REACT_APP_API_TENNIS_KEY;



    return (
        <div className="col-8 mx-auto">
            <User apiKey={apiKey}></User>
            {/* <b>{apiKeys}</b> */}
            {/* <input type="range" min="1" max="10" step="1" value="5" /> */}
        </div>
    )
};

export default withApiKey(Home);