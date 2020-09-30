import React from 'react'
import './Sidebar.css'

export const Sidebar = () => {
    
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    }
return (
    <aside className="sidebar"> 
    <h3>Service Category</h3>
    <button className="close-button" onClick={closeMenu}><i className="fas fa-times"></i></button>
    <ul>
        <li><a className='active' href="#"><i className="fas fa-home"><span>Home</span></i></a></li>
        <li><a href="#"><i className="fas fa-hammer"><span>Crafting</span></i></a></li>
        <li><a href="#"><i className="fas fa-shopping-basket"><span>Gathering</span></i></a></li>
        <li><a href="#"><i id="faicon" className="fas fa-users"><span>Queue</span></i></a></li>
        <li><a href="#"><i id="faicon" className="fab fa-optin-monster"><span>Savage</span></i></a></li>
        <li><a href="#"><i id="faicon" className="fas fa-tshirt"><span>Glamour</span></i></a></li>
        <li><a href="#"><i id="faicon" className="fas fa-horse"><span>Mount</span></i></a></li>
        <li><a href="#"><i id="faicon" className="fas fa-ambulance"><span>PVP</span></i></a></li>
        <li><a href="#"><i id="faicon" className="fas fa-tired"><span>Diadem</span></i></a></li>
    </ul>
</aside>
)}