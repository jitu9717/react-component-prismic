import React, { Component } from 'react';
import './style.css';
import '../index.css';

class MenuBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuItems: [ "News", "Betting", "Robbie Slater", "TAB Info", "Players", "Coaches", "Stadiums", "Find A TAB"],
        }
    }

    render() {
        const { menuItems } = this.state;
        return (
            <div className="menu-bar">
                <header className="menu-bar-header">
                    <h1 className="menu-bar-title">Menu Bar</h1>
                </header>
                <div className="nav">
                    <ul>
                        {
                            menuItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href="#">{item}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuBar;