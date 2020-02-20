import React from 'react';
import './App.css';

function Tweet({ name, arbitrary_name, number_of_likes }) {
    return (
        <div className="tweet">
            <h3>{name}</h3>
            <p>{arbitrary_name}</p>
            <h3>{number_of_likes}</h3>
        </div>
    );
}

export default Tweet;