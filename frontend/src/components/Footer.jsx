import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext.component';

const Footer = () => {

    const {darkMode} = useContext(ThemeContext)
    return (
        <footer class={`py-8 md:py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50' }`} >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 200px', marginBottom: '10px' }}>
                        <h3>Supermarket App</h3>
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                    <div style={{ flex: '1 1 200px', marginBottom: '10px' }}>
                        <h4>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</a></li>
                            <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
                            <li><a href="/privacy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div style={{ flex: '1 1 200px', marginBottom: '10px' }}>
                        <h4>Follow Us</h4>
                        <div>
                            <a href="https://facebook.com" style={{ color: '#fff', marginRight: '10px', textDecoration: 'none' }}>Facebook</a>
                            <a href="https://twitter.com" style={{ color: '#fff', marginRight: '10px', textDecoration: 'none' }}>Twitter</a>
                            <a href="https://instagram.com" style={{ color: '#fff', textDecoration: 'none' }}>Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer
