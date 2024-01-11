import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loader from "./Loader";
 
 
export default function PeopleContainer() {
    const [people, setPeople] = useState([]);
    const [filteredPeople, setFilteredPeople] = useState([]);
 
 
    useEffect(() => {
        fetch("https://659cf8c9633f9aee79084ece.mockapi.io/person").then(
            res => res.json().then(data => {
                setPeople(data);
                setFilteredPeople(data);
           
            })
        );
    }, []);

    if (people.length == 0) {
        return <Loader/>
    }

 
   const filterPeople = (filter)=>{
    let filtered = people.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));
    setFilteredPeople(filtered);
 
   }
 
    return (
        <div className=" ">
         
            <div className=" fixed boder mb-4 bg-white w-full h-28 p-7 ">
              <input className="border p-4 mb-20 mt-50" type="text" placeholder="Search" onChange={(el)=>{
                console.log(el.target.value);
                filterPeople(el.target.value);
              }}></input>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 pt-32'>
                {filteredPeople.map(person => {
                    return <Card name={person.name} imageUrl={person.avatar} title={person.jobtitle}/>
                })}
            </div>
           
        </div>
    )
}
