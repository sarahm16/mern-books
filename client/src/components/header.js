import React from 'react';
import '../App.css';

function Header() {
    console.log(window.screen)
    return(
        <div className='header-wrapper'>
            <div className='bg'>
                {/* {window.screen.width < 600 ? <img src={require('../images/croppedBook.jpg')}   alt='book cover' /> : <img src={require('../images/book.jpg')}   alt='book cover' />} */}
                <img className="banner" src={require('../images/book.jpg')}></img>
            </div>
            <div className='header'>
                <div className='header-title'>React Google Books</div>
                <h6>Search for and save books of interest</h6>
            </div>
        </div>
    )
}

export default Header;