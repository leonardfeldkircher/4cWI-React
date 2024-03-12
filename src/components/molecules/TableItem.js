import React from 'react'

export default function TableItem({ team, Index }) {


    return (


        <div class="flex justify-between items-center pr-8 mt-6 ">
            <div class="bg-main p-4 rounded-2xl text-l font-bold hover:bg-maind">{Index + 1}</div>
            <div class="flex items-center gap-2 bg-main rounded-2xl p-4 w-1/2 hover:bg-maind">
                <div> {team.teamName} </div>
                
                <div class="items-end"> <img class="w-7 h-7" src={team.teamIconUrl} /></div>
            </div>
            <div class="bg-main p-4 rounded-2xl w-1/4 text-center flex space-between hover:bg-maind">
                <div class="ml-1 text-l font-bold">{team.matches}</div>
                <div class="ml-5 text-l font-bold">{team.goalDiff}</div>
                <div class="ml-5 text-l font-bold">{team.points}</div>
            </div>
        </div>




    )
}
