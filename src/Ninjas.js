import React from 'react';

const Ninjas = ( { ninjas, deleteNinja }) => {
    const ninjaList = ninjas.map(boyo => {
        return boyo.age > 20 ? (
            <div className="ninja" key={boyo.id}>
            <div>Name: { boyo.name }</div>
            <div>Age: { boyo.age }</div>
            <div>Belt: { boyo.belt }</div>
            <button onClick={ () => {deleteNinja(boyo.id)}} >Delete Ninja </button>
        </div>
        ) : null;
    });

    return(
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas