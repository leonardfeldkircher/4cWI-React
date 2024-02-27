import React from "react";
import Logo from "./logo";
import AufstellungLogo from "./aufstellungLogo";

export default function header(){
return(

<body className="p-5 mb-10">

    <div className="flex space-between">
        <div className="basis-1/5 flex justify-between items-center bg-main">
            <div className="m-4 mr-2.5 ml-3"> <Logo/> </div>
            <div className="text-3xl font-extrabold"><a href="laliga.html">LaLiga</a></div>
            <div className="text-2xl font-bold mt-1.5 ml-2"><a href="laliga.html">EA Sports</a></div>
        </div>
        <div class="basis-2/5 bg-main"></div>
        <div className="basis-2/5 flex justify-between items-center bg-main">
            <div className="hover:underline"><a href="laliga3.html">Matches</a></div>
            <div className="hover:underline">Teams</div>
            <div className="hover:underline">Competitions</div>
            <div className="mr-10 hover:underline">TV</div>
        </div>
    </div>
    <div className="body pt-8">
        <div className="flex w-full h-screen">
            <div className="basis-2/5 ml-2">
                <div className="flex justify-between pr-11">
                    <div className="text-2xl font-bold">Tabelle</div>
                    <div className="text-2xl font-bold">PL GD PTS</div>
                </div>

                <div id="table"></div>
                <div className="basis-1/5 mt-5 text-l text-white rounded-2xl p-2 bg-sky-500 hover:bg-sky-600">Mehr Anzeigen</div>

            </div>
            <div className="basis-1/2 ml-20">
                <div className="text-2xl font-bold">Real Madrid</div>
                <div> <AufstellungLogo/> </div>
            </div>
        </div>
    </div>
</body>   

)
}