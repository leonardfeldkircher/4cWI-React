import React from "react";

export default function table(){

    function loadMatches() {

        fetch('https://api.openligadb.de/getbltable/laliga1/2023')
            .then(response => response.json())
            .then(json => fillTable(json))
    }
    
    function fillTable(data) {
        console.log(data);
        let table = "";
        for (let index = 1; index <= 8; index++) {
            data.forEach((team, teamIndex) => {
                if (teamIndex === index - 1) {
                    let position = index;
    
                    let teamLink = (team.teamName === 'Real Madrid') ? 'laliga2.html' : 'laliga.html';
                  
                    table += `<a href="${teamLink}"><div class="flex justify-between items-center pr-8 mt-6">` +
                        `<div class=" bg-main p-4 rounded-2xl text-l font-bold hover:bg-maind">` + position + `</div>` +
                        `<div class="flex items-center gap-2 bg-main rounded-2xl p-4 w-1/2 hover:bg-maind">` +
                        `<div><a href="${teamLink}">` + team.teamName + `</a></div>` +
                        `<div class="logo"> <img class="w-7" src="` + team.teamIconUrl + `"></div>` +
                        `</div></a>` +
                        `<div class="bg-main p-4 rounded-2xl w-1/4 text-center flex space-between hover:bg-maind">` +                        `<div class="ml-1 text-l font-bold">` + team.matches + `</div>` +
                        `<div class="ml-5 text-l font-bold">` + team.goalDiff + `</div>` +
                        `<div class="ml-5 text-l font-bold">` + team.points + `</div>` +
                        `</div>` +
                        `</div></a>`;
                    
                }
            });
        }
    
        document.getElementById("table").innerHTML = table;
    }
    
    loadMatches();
    
    


}