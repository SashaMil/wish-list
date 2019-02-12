import React from 'react';
import Aux from '../../hoc/Aux';
import './ListTitle.css';

const ListTitle = ( props ) => (
    <Aux>
        <h1 onClick={props.deleteTab} className="title">{props.tabName}</h1>
    </Aux>
);

export default ListTitle;
