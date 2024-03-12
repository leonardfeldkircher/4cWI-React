import React from "react";
import Logo from "../atoms/Logo";
import {Link } from "react-router-dom";


export default function Header(){
return(

<body className="p-5 mb-10">

    <div className="flex space-between">
        <div className="basis-1/5 flex justify-between items-center bg-main">
            <div className="m-4 mr-2.5 ml-3"> <Logo/> </div>
            <Link to={`/`} className="text-3xl font-extrabold">LaLiga</Link>
            <Link to={`/`} className="text-xl font-bold mt-1.5 ml-2">EA Sports</Link>
        </div>
        <div class="basis-2/5 bg-main"></div>
        <div className="basis-2/5 flex justify-between items-center bg-main">
            <div className="hover:underline">Matches</div>  
            <Link to={`/teams`} className="hover:underline">Teams</Link>
            <div className="hover:underline">Competitions</div>
            <div className="mr-10 hover:underline">TV</div>
        </div>
    </div>
</body>   

)
}