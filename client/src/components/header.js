import React from 'react';
import '../App.css';

function Header() {
    return(
        <div>
            {/* <img src='http://bookshelf.themerex.net/wp-content/uploads/2015/04/bigopenbook.jpg' style={{width: '100%'}} /> */}
            {/* <div className='jumbotron'>
                <h1>React Google Books</h1>
                <h4>Search for and save books of interest</h4>
            </div> */}
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