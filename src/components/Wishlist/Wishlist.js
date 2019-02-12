import React from 'react';
import ListTitle from '../../components/ListTitle/ListTitle';
import ListItem from '../../components/ListItem/ListItem';
import Select from '../../components/Select/Select';
import ItemCreator from '../../containers/ItemCreator/ItemCreator';
import './Wishlist.css';


const Wishlist = ( props ) => (
    <div className="list">
        <Select
            sortList={props.sortList}
        />
        <ListTitle
           tabName={props.tabName}
           deleteTab={props.deleteTab}
        />
       <div className="list_body">
           {props.list.map((item, index) => (
               <ListItem
                   key={props.uniqueKeyGenerator(item.name, index)}
                   name={item.name}
                   price={item.price}
                   link={item.link}
                   deleteItem={props.deleteItem.bind(this, item.id)}
                   editItem={props.editItem.bind(this, item)}
                   orderOfItem={props.orderOfItem.bind(this, index)}
               />
           ))}
       </div>
       {props.displayItemCreator ? (
           <ItemCreator
               toggleItemCreator={props.toggleItemCreator}
               addItem={props.addItem}
               itemToEdit={props.itemToEdit}
               submitEditedItem={props.submitEditedItem}
           />
       ) : null }
       <img className="addItem" onClick={props.toggleItemCreator} src="/icons/iconfinder_circle-add-plus-new-outline-stroke_763486 copy.png" />
    </div>
);

export default Wishlist;
