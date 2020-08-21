import React, { Component } from 'react';

const NavBar = ({ totalCount }) => {
    return ( 
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="!#">SHOP
                    <span>
                        <button type="button" class="btn btn-primary m-2">
                            Total Items <span class="badge badge-light">{totalCount}</span>
                        </button>
                    </span>
                </a>
            </nav>
            
        </div>
     )
}
 
export default NavBar;
 
