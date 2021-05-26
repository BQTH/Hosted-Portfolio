import { Component } from 'react';
import { SidebarData } from './SidebarData'
import "./navbar.css"
import {NavLink} from 'react-router-dom'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                
                <a className="logo" href="/">BQTH</a>
                <div className="menu-icon" onClick={this.handleClick}>
                
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <div className={this.state.clicked ? 'backgr active' : 'backgr'} onClick={this.handleClick}></div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                <i style={{textAlign: "right", paddingRight: "25px"}} className="fas fa-times" onClick={this.handleClick}></i>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink activeClassName="active" className={item.cName} to={item.path} >
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                
            </nav>
        )
    }
}

export default Navbar