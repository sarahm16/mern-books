import React, { Component } from 'react';

import TopBook from '../components/topBook';

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
            this.state.bookList.length !== 0 && this.state.bookList.map(book => {
                return <TopBook book={book} />
            })
        )
    }
}

export default TopBooks;