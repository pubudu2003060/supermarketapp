import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
            <header>
                <div>
                    <p>Welcome to our website</p>
                    <nav>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                    <p>We deliver to you every day from 7am to 23pm</p>
                    <nav>
                        <ul>
                            <li>Order Tracking</li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <input type="text" />
                        <button>Search</button>
                    </div>
                    <div>
                        <i></i>
                        <i></i>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>Shop</li>
                            <li>Fruit and vegitables</li>
                            <li>Fruit and vegitables</li>
                            <li>Beverages</li>
                            <li>House Hold</li>
                        </ul>
                    </nav>
                </div>
            </header>
    )
}

export default Header
