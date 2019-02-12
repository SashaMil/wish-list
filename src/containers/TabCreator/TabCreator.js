import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import './TabCreator.css';

class TabCreator extends Component {

    state = {
        tabName: '',
    };

    handleChange = (e) => this.setState({
        tabName: e.target.value,
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTab(this.state.tabName);
        this.state.tabName = '';
        this.props.toggleTabCreator();
    }

    render() {
        return(
            <div className="tabCreator">
                <form className="tabForm" onSubmit={this.onSubmit}>
                    <div className="tabInputContainer">
                        <input placeholder="Name of Tab" value={this.state.tabName} onChange={this.handleChange} className="tabInput"></input>
                    </div>
                    <div className="tabInputContainer">
                        <input className="tabSubmit" type="submit"/>
                        <input className="tabCancel" type="button" value="Cancel" onClick={this.props.toggleTabCreator} />
                    </div>
                </form>
            </div>
        )
    }
};

export default TabCreator;
