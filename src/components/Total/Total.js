import React from 'react';
import './Total.css';

const Total = ( props ) => (
    <div className="total">
        <p>${props.total}</p>
    </div>
);

export default Total;
