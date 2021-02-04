import React, { Component } from 'react';

import TopBook from '../components/topBook';

import API from '../utils/API';

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

        API.getListNames()
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
                                    <li className='dropdown-item' id='hardcover-fiction'>Fiction</li>
                                    <li className="dropdown-item" id='hardcover-nonfiction' >Nonfiction</li>
                                    <li className="dropdown-item" id='young-adult-hardcover' >Young Adult</li>
                                    <li className="dropdown-item" id='hardcover-advice'>Advice</li>
                                    <li className='dropdown-item' id='hardcover-graphic-books'>Graphics</li>
                                    <li className='dropdown-item' id='childrens-middle-grade'>Childrens</li>
                                    <li className='dropdown-item' id='business-books'>Business</li>
                                    <li className='dropdown-item' id='celebrities'>Celebrities</li>
                                    <li className='dropdown-item' id='food-and-fitness'>Food and Fitness</li>
                                    <li className='dropdown-item' id='religion-spirituality-and-faith'>Religion</li>
                                    <li className='dropdown-item' id='travel'>Travel</li>
                                    <li className='dropdown-item' id='sports'>Sports</li>
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