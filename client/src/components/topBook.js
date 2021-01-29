import React from 'react';

function TopBook(props) {
    let book = props.book;

    return(
        <div className='card'>
            <div className='image'><img src={book['book_image']} id='image' /></div>
            <div className='card-body'>
                <div className='about'>
                    <div className='title'>{book.title}</div>
                    <div className='authors'>By {book.author}</div>
                </div>
            </div>
        </div>
    )
}

export default TopBook;