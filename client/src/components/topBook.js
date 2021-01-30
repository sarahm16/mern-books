import React from 'react';

function TopBook(props) {
    let book = props.book;
    console.log(book);

    return(
        <a href={book['amazon_product_url']} target='_blank'>
            <div className='card'>
                <div className='top-image'><img src={book['book_image']} id='image' /></div>
                <div className=' top-card-body'>
                    <div className='about'>
                        <div className='title'>{book.title}</div>
                        <div className='authors'>By {book.author}</div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default TopBook;