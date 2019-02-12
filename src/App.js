import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import DeleteTab from './components/DeleteTab/DeleteTab';
import TabCreator from './containers/TabCreator/TabCreator';
import Aux from './hoc/Aux';

class App extends Component {

    state = {
        currentTab: null,
        currentTabTotal: '',
        tabNames: [],
        displayTabCreator: false,
        displayDeleteTab: false,
    };

    tabSelector = ( tabId, total ) => {
        this.setState({
            currentTab: tabId,
        }, this.getCurrentTabTotal(total));
    };

    getCurrentTabTotal = ( total ) => {
        this.setState({
            currentTabTotal: total,
        });
    }

    toggleTabCreator = ( ) => {
        this.setState({
            displayTabCreator: !this.state.displayTabCreator
        })
    };

    toggleDeleteTab = ( ) => {
        this.setState({
            displayDeleteTab: !this.state.displayDeleteTab
        })
    };

    addTab = ( tabName ) => {
        this.setState({
            tabNames: [...this.state.tabNames, tabName]
        })
    };

    deleteTab = () => {
        this.toggleDeleteTab();
    };

    submitDeleteTab = () => {
        console.log('hello');
        this.toggleDeleteTab();
        let newTabList = [...this.state.tabNames];
        newTabList = newTabList.filter(tab => tab !== this.state.currentTab);
        console.log(newTabList, this.state.currentTab);
        this.setState({
            tabNames: newTabList,
        })
    }

    uniqueKeyGenerator = ( tabName, index ) => {
        return tabName + index;
    };

    render() {

        const tabCreator = this.state.displayTabCreator;
        const deleteTab = this.state.displayDeleteTab;
        const currentTab = this.state.currentTab;
        const currentTabTotal = this.state.currentTabTotal;

        return (
            <Aux>
                <div className="header">
                    <Header
                      tabSelector={this.tabSelector}
                      tabNames={this.state.tabNames}
                      uniqueKeyGenerator={this.uniqueKeyGenerator}
                      toggleTabCreator={this.toggleTabCreator}
                      currentTab={currentTab}
                      currentTabTotal={currentTabTotal}
                      getCurrentTabTotal={this.getCurrentTabTotal}
                      deleteTab={this.deleteTab}
                     />
                {tabCreator ? (
                    <TabCreator
                      addTab={this.addTab}
                      toggleTabCreator={this.toggleTabCreator}
                     />
                ) : null }
                {deleteTab ? (
                    <DeleteTab
                        currentTab={currentTab}
                        toggleDeleteTab={this.toggleDeleteTab}
                        submitDeleteTab={this.submitDeleteTab}
                     />
                ) : null }
                </div>
            </Aux>
        );
    }
}

export default App;
