import React, { Component } from 'react';

import TopBook from '../components/topBook';

import './search.css';

class TopBooks extends Component {
    constructor() {
        super()
        this.state = {
            bookList: [],
            showMenu: false
        }
    }

    componentDidMount() {
        let bookList = this.props.bookList.data.results.books;
        console.log(bookList);
        this.setState({bookList: bookList})
    }

    showMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        return(
                <div className='row'>
                    <div className='row top-sellers-header'>
                        <div className='top-sellers-title'>
                            <h2>TOP SELLERS</h2>
                            {/* TOP SELLERS */}
                        </div>
                        <div className='top-sellers-dropdown'>
                            <div className="dropdown">
                                <button onClick={this.showMenu} className="btn btn-secondary" type="button" id="dropdownMenuButton">
                                    Categories
                                </button>
                                {this.state.showMenu && <div className="menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {this.state.bookList.length !== 0 && this.state.bookList.map(book => {
                            return(             
                                <div className='col-lg-3 col-6 col-md-6 book-card d-flex justify-content-center'>
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