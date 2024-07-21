import React, { useEffect, useState } from "react";
import './Home.css';
// import axios from "axios";
import ReactDOM from 'react-dom/client';
import Header from "../HeaderComponents/Header";



const Home = (props) => {

    const [restaurant, setRestaurant] = useState([]);

    useEffect(() => {
        // axios.get("http://localhost:3001/restaurants")
        // .then((response) => setRestaurant(response.data.restaurants))
        // .catch((err) => console.log(err));

        fetch("http://localhost:3001/restaurants")
        .then(response => response.json())
        .then(data => setRestaurant(data))
        .catch(err => console.log(err))
    
    }, []);

    return (
        <div>
            <Header/>

            <div className="Welcome-heading">
                <h1>Welcome to Restaurants </h1> <br/>
                <h4>See, our restaurant partners are here. And here, you can choose which restaurant you want</h4>
            </div>
            
            {/* <h2>I am a { props.brand }!</h2>; */}

            <div className="restaurants">
                <ul className="restaurants-ul">

                    {restaurant.map((list, index) => (
                        <li  key={index} > 
                            <img src={list.restaurant_img} />
                            <p>{list.restaurant_id}</p>
                            <p>{list.restaurant_name}</p>
                            <a href="">{list.restaurant_menu}</a> 
                        </li>
                    ))}
                </ul>

            </div>
    
            
        </div>
    )
}

const myElement = <Home brand="Ford" />;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);


export default Home;