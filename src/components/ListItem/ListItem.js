import React from 'react';
import Aux from '../../hoc/Aux';
import Button from '../../UI/Button/Button';

import './ListItem.css';


const ListItem = ( props ) => (
    <div className="listItem">
        <div className="arrowsContainer">
            <img className="upArrow" onClick={() => props.orderOfItem('up')} src="/icons/upArrow.png">
            </img>
            <img className="downArrow" onClick={() => props.orderOfItem('down')} src="/icons/downArrow.png">
            </img>
        </div>
        <div className="listItemDetails">
            <p className="listItemName">{props.name}</p>
            <p className="listItemPrice">${props.price}</p>
        </div>
        <div className="buttonContainer">
            <form action={props.link} target="_blank">
                <Button className="viewButton" name="View"></Button>
            </form>
            <Button className="editButton" name="Edit" click={props.editItem}></Button>
            <Button className="deleteButton" name="Delete" click={props.deleteItem}></Button>
        </div>

    </div>
);

export default ListItem;
