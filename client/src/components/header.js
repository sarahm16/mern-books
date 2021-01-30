import React from 'react';
import '../App.css';

function Header() {
    return(
        <div>
            <div className='bg'>
                <img src={require('../images/book.jpg')} style={{width: '100%'}} />
            </div>
            <div className='header'>
                <div className='header-title'>React Google Books</div>
                <h6>Search for and save books of interest</h6>
            </div>
        </div>
    )
}

export default Header;