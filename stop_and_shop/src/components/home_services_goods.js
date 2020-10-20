import React from 'react';
import { Link } from "react-router-dom";
import goods from '../images/goods.png'
import services from '../images/services.png'



function Pages() {
    return (
        <>
            <main id='homePage'>
                <div className="about-section">
                    <h1>About Us</h1>
                    <p>Your free online store is just a few clicks away.</p>
                    <p>Join hundreds of thousands of small businesses who trust Stop&Shop E-commerce to sell online.</p>
                </div>
                <div id='section2'>
                    <h2 id='hedings'>Our services</h2>
                    <div className="row">
                        <div className="column">
                            <div className="cardhome">

                                <div className="container">
                                    <h2>Services</h2>
                                    <img src={services}></img>

                                    <p className="title">Adding Services</p>
                                    <p className='cardspara'>Outsourcing the Services to <i> Stop <span className='and'> And</span> Shop </i>  will deliver you the utmost profitability, both economically and from the qualitative aspects of the business.</p>
                                    <Link to="/service">
                                        <button className="button">
                                            Visit Services
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="column">

                            <div className="cardhome">
                                <div className="container">
                                    <h2>Goods</h2>
                                    <img src={goods}></img>
                                    <p className="title">Sell anything</p>
                                    <p className='cardspara'> Outsourcing the Goods to <i>Stop <span className='and'> And </span> Shop </i> will deliver you the utmost profitability, both economically and from the qualitative aspects of the business.</p>
                                    {/* <Link to="/goods">
                                        <button className="button">Visit Goods </button>
                                    </Link> */}
                                    <a href="/goods"> <button className="button">Visit Goods</button></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default Pages;