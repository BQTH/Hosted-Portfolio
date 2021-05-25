import { Component } from 'react';
import { SidebarData } from './SidebarData'
import "./navbar.css"
import Fade from 'react-reveal/Fade';

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
                                <a className={item.cName} href={item.path} >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
            </nav>
        )
    }
}

export default Navbar