import React from 'react';

function TopBook(props) {
    console.log(props)
    return(
        <div>{props.book.title}</div>
    )
}

export default TopBook;