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
                    <div className='row top-sellers-title'>
                        TOP SELLERS
                    </div>
                    <div className='row'>
                        {this.state.bookList.length !== 0 && this.state.bookList.map(book => {
                            return(             
                                <div className='col-lg-3 col-6 col-md-12 book-card'>
                                    <TopBook book={book} />
                                </div>
                            )
                        })}
                    </div>
                </div>
        )
    }
}

export default TopBooks;