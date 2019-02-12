import React from 'react';
import './Select.css';

const Select = ( props ) => (
    <form className="sorting__form" action="">
        <select className="sorting__select" onChange={props.sortList}>
            <option value="default">Default</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="descending">$$$ to $</option>
            <option value="ascending">$ to $$$</option>
        </select>
    </form>
);

export default Select;
