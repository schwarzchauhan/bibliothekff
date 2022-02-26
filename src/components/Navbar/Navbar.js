import React, { Component } from 'react'
import { MenuItems } from "./MenuItems";
import'./Navbar.css'

class Navbar extends Component {

    state = {hamClicked : false}

    handleNavMenu = () => {
        // var isClicked = this.state.hamClicked;
        // this.state.hamClicked = !isClicked;
        this.setState({
            hamClicked: !this.state.hamClicked
        })
    }

    render(){
        return (
            <nav className='Navbar'>
                <h1 className="navbar-logo">🕮</h1>
                <div className="nav-menu-icon" onClick={this.handleNavMenu}>
                    <i>
                        {!this.state.hamClicked ? '☰' : '❌'}
                    </i>
                </div>
                <div className="navbar-cont">
                    <ul>
                        {MenuItems.map((item, index) => {
                            return (
                                <li className='nav-item'>
                                    <a className='nav-links' href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar