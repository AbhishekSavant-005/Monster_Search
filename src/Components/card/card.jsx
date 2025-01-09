import React from "react";
import './card.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h2>{props.monster.name}</h2>
        <p>User Name: {props.monster.username}</p>
        <p>Mail:{props.monster.email}</p>
    </div>
)

