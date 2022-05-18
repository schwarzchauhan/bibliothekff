import React, { Component } from 'react'
import { MenuItems } from "./MenuItems";
import '../../assets/styles/css/Navbar.css'
import '../../App.css'

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
            <div className='Navbar'>
                <h1 className="navbar-logo">🕮 {process.env.NODE_ENV}  </h1>
                <div className='navbar-cont'>
                    <div className={this.state.hamClicked ? "navlinks-cont disp-inl-blk" : "navlinks-cont"}>
                        <ul className='mrgn-blk-start0'>
                            {MenuItems.map((item, index) => {
                                return (
                                    <li className='nav-item'>
                                        <a className='nav-links' href={item.url}>
                                            {item.title}
                                            {item.imgUrl && <img className='navIcon' src={item.imgUrl}></img>}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="nav-menu-icon" onClick={this.handleNavMenu}>
                        <i>
                            {!this.state.hamClicked ? '☰' : '❌'}
                        </i>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Navbar