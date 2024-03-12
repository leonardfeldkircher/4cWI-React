import React, { useEffect, useState } from 'react'
import TableItem from '../molecules/TableItem';

export default function Table() {
  const [teams, setTeams] = useState([]);


  useEffect(() => {
    fetch('https://api.openligadb.de/getbltable/laliga1/2023')
      .then(response => response.json())
      .then(json => setTeams(json))
  }, []);

  return (
    <div className="w-2/5 mb-10">
      <div className="flex h-screen pl-8">
        <div className=" ml-2 w-full">
          <div className="flex justify-between pr-11">
            <div className="text-2xl font-bold">Tabelle</div>
            <div className="text-2xl font-bold">PL GD PTS</div>
          </div>
          <div>
            {teams.map((team, index) => {
              if (index < 8) {
                return <TableItem key={index} Index={index} team={team} />
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
