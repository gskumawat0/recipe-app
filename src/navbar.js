import React, {Component} from 'react';
import './navbar.css';
class Nav extends Component {
    render(){
        return(
            <nav className='nav bg-dark'>
            <div className='container'>
                <a href='https://myweb.com' className='d-inline'> Recipe App</a>
                <ul>
                    <li>New Recipe</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
               
            </nav>
            )
    }
}

export default Nav;