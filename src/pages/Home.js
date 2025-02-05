import React from "react";
import Navigation from "../components/Navigation";


const Home = () =>{

    const tab = [9, 23, 33, 37, 58];

    tab.map((t,index) => {
        console.log(t);
        console.log(index);
        }
    )
    
    const sum = tab.reduce((acc, curr) => acc + curr, 100);
    console.log(sum)

    return (
        <div>
            <Navigation />
            {/* <b>{{sum}}</b> */}
        </div>
    )
};

export default Home;