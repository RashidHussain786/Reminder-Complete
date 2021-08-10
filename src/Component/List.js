import React from 'react'
import ListCard from './card'

function List({people}) {
    
    return (
        <>
        {people.map((person)=> {
            const{id,name,age,image}=person;
            return(
                <ListCard key={id}
                name={name}
                age={age}
                image={image}
                />
            )
        })}
        </>
    )
}

export default List
