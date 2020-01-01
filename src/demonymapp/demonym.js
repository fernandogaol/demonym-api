import React from 'react';
import "./demonym.css"

export default function Demonym(props){
    return (
        <div className="demonym">
           <span> a {props.name} comes from {props.country} </span>
        </div>
    );
}