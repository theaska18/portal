import React, { useEffect } from 'react';
import M from 'materialize-css';
function NavPortal() {
	useEffect(() => {
	    var elems = document.querySelectorAll('.sidenav');
	    var instances = M.Sidenav.init(elems, {});
  	}, []);
    return (
    	<>
	        <div>
		      <nav>
		        <div className="nav-wrapper">
		          <a href="#!" className="brand-logo">Logo</a>
		          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
		            <i className="material-icons white-text">menu</i>
		          </a>
		          <ul className="right hide-on-med-and-down">
		            <li><a href=".">Home</a></li>
		            <li><a href="./about">About</a></li>
		            <li><a href="./contact">Contact</a></li>
		          </ul>
		        </div>
		      </nav>
		      <ul className="sidenav" id="mobile-demo">
		        <li><a href=".">Home</a></li>
		        <li><a href="./about">About</a></li>
		        <li><a href="./contact">Contact</a></li>
		      </ul>
		    </div>
	    </>
    );
}

export default NavPortal;
