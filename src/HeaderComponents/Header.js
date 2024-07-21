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
                <nav className="nav">
                    <a href="#">
                        <h2 className="nav-head">Restaurants</h2>
                    </a>

                    <nav className="nav-menu active"  onClick={this.NavBarHandler}>
                        <ul className= {this.state.clicked ? "nav-list active" : "nav-list"} >
                            <a href="#">
                                
                                <li> Home</li>
                            </a> 

                            <a href="#">
                                <li> About Us</li>
                            </a> 

                            <a href="#">
                                <li> Menus </li>
                            </a> 

                            <a href="#">
                                <li><i class="fa-solid fa-cart-shopping"></i>Cart  <span className="cart-number">10</span></li>
                            </a> 

                            <a href="#">
                                <li> Orders</li>
                            </a> 

                            <a href="#">
                                <li> Profile </li>
                            </a> 
                        </ul>
                    </nav>

                    <div className='menu-icons' onClick={this.NavBarHandler}>    
                        <i className = {this.state.clicked ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i>
                    </div>

                </nav>

                <img src="" />


            </div>
        );
   }
}


export default Header;