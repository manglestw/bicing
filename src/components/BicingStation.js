import React from 'react';

const buttonStyle = {
    fontSize: '15px',
};

export const BicingStation = ({id,streetName}) => {
    return (
        <li>
            <span>{id} - {streetName} </span><button style={buttonStyle}><a href={id}>View</a></button>
        </li>
    )
};