import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav=()=>{    
    return (
    <div className="main-navigation">
<nav>
   <Link to='/'>Products</Link> 
   <Link to='/cart'>Cart</Link>
</nav>
    </div>)
    
} 
export default Nav;