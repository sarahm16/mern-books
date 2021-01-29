import React from 'react';

function Navbar() {
    return(
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="/">Search</a> 
        //     <a className="navbar-brand" href="/saved">Saved</a>
        // </nav>
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand" href='/saved'>Saved</a>
            <form className="form-inline">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default Navbar