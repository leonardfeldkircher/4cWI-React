import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

export default function PeopleContainer() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://659cf8c9633f9aee79084ece.mockapi.io/person").then(
            res => res.json().then(data => {
                setPeople(data)
            })
        );
    }, []);

   

    return (
        <div>
            <h1>People</h1>
            {people.length==0?<Loader/>:<div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {people.map(person => {
                    return <Card name={person.name} imageUrl={person.avatar} title={person.jobtitle}/>
                })}
            </div>}
            
        </div>
    )
}