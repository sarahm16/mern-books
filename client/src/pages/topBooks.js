import React, { Component } from 'react';

class TopBooks extends Component {
    constructor() {
        super()
        this.state = {
            bookList: []
        }
    }

    componentDidMount() {
        let bookList = this.props.bookList.data.results.books;
        console.log(bookList);
        this.setState({bookList: bookList})
    }

    render() {
        return(
            // this.state.bookList.map(book => {
            //     return <div>{book.title}</div>
            // })
            //<div>Top Books</div>
            this.state.bookList.length !== 0 && this.state.bookList.map(book => {
                return <div>{book.title}</div>
            })
        )
    }
}

export default TopBooks;