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
                <div className='row'>
                    {this.state.bookList.length !== 0 && this.state.bookList.map(book => {
                        return(             
                            <div className='col-lg-3 col-sm-1 col-md-6 book-card'>
                                <TopBook book={book} />
                            </div>
                        )
                    })}
                </div>
        )
    }
}

export default TopBooks;