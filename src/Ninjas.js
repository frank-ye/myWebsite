import React from 'react';

const Ninjas = ( { ninjas }) => {
    const ninjaList = ninjas.map(boyo => {
        return boyo.age > 20 ? (
            <div className="ninja" key={boyo.id}>
            <div>Name: { boyo.name }</div>
            <div>Age: { boyo.age }</div>
            <div>Belt: { boyo.belt }</div>
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