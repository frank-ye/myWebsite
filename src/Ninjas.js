import React, { Component } from 'react';

class Ninjas extends Component{
    render(){ 
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(boyo => {
            return (
                <div className="ninja" key={boyo.id}>
                <div>Name: { boyo.name }</div>
                <div>Age: { boyo.age }</div>
                <div>Belt: { boyo.belt }</div>
            </div>
            )
        })
        return(
            <div className="nija-list">
                { ninjaList }
            </div>
        )
    }
}

export default Ninjas