import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Wishlist from '../../components/Wishlist/Wishlist';
import './Tab.css';

class Tab extends Component {

    state = {
        displayItemCreator: false,
        list: [],
        total: 0,
        editItem: '',
    };

    addItem = (newItem) => {
        let newList = [...this.state.list, newItem];
        this.setState({
            list: newList,
        }, this.calculateTotal);
    };

    editItem = ( item ) => {
        this.setState({
            editItem: item,
        }, this.toggleItemCreator);
    }

    submitEditedItem = ( editedItem ) => {
        let newList = [...this.state.list];
        let index = newList.findIndex(item => item.id === editedItem.id);
        newList[index] = editedItem;
        this.setState({
            list: newList,
        });
        this.setState({
            editItem: '',
        }, this.calculateTotal);
    }

    sortList = ( e ) => {
        let sortedList = this.state.list;
        switch( e.target.value ) {
            case 'default':
                return;
            break;
            case 'alphabetical':
                sortedList = sortedList.sort((a,b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : ((b.name.toUpperCase() > a.name.toUpperCase()) ? -1 : 0));
                this.setState({
                    list: sortedList,
                });
            break;
            case 'ascending':
                sortedList = sortedList.sort((a,b) => (a.price - b.price));
                this.setState({
                    list: sortedList,
                });
            break;
            case 'descending':
                sortedList = sortedList.sort((a, b) => (b.price - a.price));
                this.setState({
                    list: sortedList,
                });
            break;
        }
    }

    orderOfItem = ( index, direction ) => {
        Array.prototype.move = function(from, to) {
            this.splice(to, 0, this.splice(from, 1)[0]);
            return this;
        }

        let reorderedList = [...this.state.list];
        if (direction === 'up' && index !== 0) {
            reorderedList = reorderedList.move(index, index - 1);
        }
        else if (direction === 'down' && index !== this.state.list.length - 1) {
            reorderedList = reorderedList.move(index, index + 1);
        }

        this.setState({
            list: reorderedList,
        });
    }

    deleteItem = ( itemId ) => {
        console.log(itemId);
        let filteredArray = this.state.list.filter(item => item.id !== itemId);
        this.setState({
            list: filteredArray
        }, this.calculateTotal);
    }

    calculateTotal = () => {
        if (this.state.list.length === 0) {
            this.props.getCurrentTabTotal(0);
            return;
        }
        let total = 0;
        this.state.list.map(item => {
            total += parseInt(item.price);
        });
        this.setState({
            total: total,
        }, this.props.getCurrentTabTotal(total));
    }

    toggleItemCreator = () => {
        this.setState({
            displayItemCreator: !this.state.displayItemCreator
        });
    };

    render() {

        const itemCreator = this.state.displayItemCreator;
        const list = this.state.list;
        const total = this.state.total;

        return (
            <Aux>
                <div className="tab" onClick={this.props.tabSelector.bind(this, total)}>
                    <p>{this.props.tabName}</p>
                </div>
                {this.props.currentTab === this.props.tabName ? (
                    <Wishlist
                        tabName={this.props.tabName}
                        uniqueKeyGenerator={this.props.uniqueKeyGenerator}
                        displayItemCreator={itemCreator}
                        list={list}
                        tabState={this.state}
                        addItem={this.addItem}
                        editItem={this.editItem}
                        deleteItem={this.deleteItem}
                        total={total}
                        toggleItemCreator={this.toggleItemCreator}
                        itemToEdit={this.state.editItem}
                        submitEditedItem={this.submitEditedItem}
                        orderOfItem={this.orderOfItem}
                        deleteTab={this.props.deleteTab}
                        sortList={this.sortList}
                    />
                ) : (
                    null
                )}
            </Aux>
        );
    };
};

export default Tab;
