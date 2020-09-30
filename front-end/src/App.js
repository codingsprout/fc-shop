import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {Sidebar} from './Sidebar/Sidebar'
import Home from './pages/Home'
import Service from './pages/Service'
import Cart from './pages/Cart'

function App() {

const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="fc-brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to='/'>FC Service Shop</Link>
        </div>
        <div className="header-link">
            <a href="cart.html">Shopping Cart</a>
            <a href="login">Log In</a>
        </div>
    </header>
    <Sidebar />
    <main className="main">
        <section className="service-page">
            <div className="content">
                <Route path='/cart/:id?' component={Cart} />
                <Route path='/service/:id' component={Service} />
                <Route path='/' exact={true} component={Home}/>            
            </div>
         </section>
    </main>
    <footer className="footer">
        All rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
