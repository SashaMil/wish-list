import React from 'react';

const Button = ( props ) => (
    <button className={props.className} onClick={props.click}>
        {props.name}
    </button>
);

export default Button;
