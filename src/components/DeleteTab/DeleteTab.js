import React from 'react';
import './DeleteTab.css'

const DeleteTab = ( props ) => (
    <div className="deleteTab">
        <form className="tabForm">
            <p className="warning">Delete {props.currentTab} Wish List?</p>
            <div className="tabInputContainer">
                <input className="deleteConfirm" onClick={props.submitDeleteTab} type="button" value="Confirm"/>
                <input className="deleteCancel" onClick={props.toggleDeleteTab} type="button" value="Cancel"/>
            </div>
        </form>
    </div>
);

export default DeleteTab;
