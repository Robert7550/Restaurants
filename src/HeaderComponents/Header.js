import React, { Component } from "react";
import './Header.css'




class Header extends Component {

    state = {clicked : false};
    NavBarHandler = () => {
        this.setState({clicked : ! this.state.clicked})
    }


   render () {
        return (
            <div>
                <nav className="nav active" onClick={this.NavBarHandler}>
                    <a href="#">
                        <h2 className="nav-head">Restaurants </h2>
                    </a>

                    <ul className= {this.state.clicked ? "nav-list active" : "nav-list"} >
                        <a href="#">
                            
                            <li> Home</li>
                        </a> 

                        <a href="#">
                            <li> Menus</li>
                        </a> 

                        <a href="#">
                            <li><i class="fa-solid fa-cart-shopping"></i>Cart  <span className="cart-number">10</span></li>
                        </a> 

                        <a href="#">
                            <li> Orders</li>
                        </a> 
                    </ul>

                    <div className='menu-icons' onClick={this.NavBarHandler}>    
                        <i className = {this.state.clicked ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i>
                    </div>

                </nav>

            </div>
        );
   }
}


export default Header;