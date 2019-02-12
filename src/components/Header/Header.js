import React from 'react';
import Tab from '../../containers/Tab/Tab';
import Total from '../../components/Total/Total';
import Button from '../../UI/Button/Button';
import './Header.css';

const Header = ( props ) => (
    <div className="tabs">
        {props.currentTabTotal > 0 ? (
            <Total
                total={props.currentTabTotal}
            />
        ) : null}
    {props.tabNames.map((tabName, index) => (
            <Tab
                key={props.uniqueKeyGenerator(tabName, index)}
                tabName={tabName}
                tabSelector={props.tabSelector.bind(this, tabName)}
                currentTab={props.currentTab}
                uniqueKeyGenerator={props.uniqueKeyGenerator}
                getCurrentTabTotal={props.getCurrentTabTotal}
                deleteTab={props.deleteTab}
            />
    ))}
        <img className="addTab" onClick={props.toggleTabCreator} src="/icons/iconfinder_circle-add-plus-new-outline-stroke_763486 copy.png">
        </img>
    </div>
);

export default Header;
