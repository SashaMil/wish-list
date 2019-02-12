import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import './ItemCreator.css';

class ItemCreator extends Component {

    state = {
        name: this.props.itemToEdit.name || '',
        price: this.props.itemToEdit.price || '',
        link: this.props.itemToEdit.price || '',
        id: this.props.itemToEdit.id || '',
    };

    handleChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        })
     }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.toggleItemCreator();
        if (this.props.itemToEdit !== "") {
            this.props.submitEditedItem(this.state);
        }
        else {
            this.state.id = this.state.name + Math.random() * 100;
            this.props.addItem(this.state);
        }
    };

    render() {
        return (
            <div className="itemCreator">
                <form className="itemForm" onSubmit={this.onSubmit}>
                    <div className="itemInputContainer">
                        <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} placeholder="Name of Item" className="itemInput"></input>
                    </div>
                    <div className="itemInputContainer">
                        <input type="number" value={this.state.price} onChange={this.handleChange.bind(this, 'price')} placeholder="Price of Item" className="itemInput"></input>
                    </div>
                    <div type="text" className="itemInputContainer">
                        <input value={this.state.link} onChange={this.handleChange.bind(this, 'link')} placeholder="Link to Item" className="itemInput"></input>
                    </div>
                    <div className="itemInputContainer">
                        <input className="itemSubmit" type="submit"/>
                        <input className="itemCancel" type="button" value="Cancel" onClick={this.props.toggleItemCreator} />
                    </div>
                </form>
            </div>
        );
    };
}


export default ItemCreator
