import React from 'react';
import * as icoins from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Navbar()
{
    return(
    	<div className="navbar">
    	<Link to='#' className='menu-bars'>
    	<icoins.FaBars />
    	</Link>
    	</div> 
    	)


}
export default Navbar;