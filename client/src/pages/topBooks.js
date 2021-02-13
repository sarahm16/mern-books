import React, { Component } from 'react';

import TopBook from '../components/topBook';

import API from '../utils/API';

import './search.css';

class TopBooks extends Component {
    constructor() {
        super()
        this.state = {
            bookList: [],
            showMenu: false,
            activePage: 'hardcover-fiction',
            key: 0
        }
    }

    componentDidMount() {
        let bookList = this.props.bookList.data.results.books;
        //let key = (Math.random());
        console.log(Math.floor(Math.random() * 100000000))

        this.setState({
            bookList: bookList
            
        })
    }

    showMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    changeCategory = (event) => {
        this.setState({activePage: event.target.id})
        API.getTopBooks(event.target.id)
            .then(res => {
                //console.log(res.data.results.books)
                this.setState({
                    bookList: res.data.results.books,
                    showMenu: false,
                    
                })
            })
    }

    render() {
        return(
                <div className='row'>
                    <div className='row top-sellers-header'>
                        <div className='top-sellers-title'>
                            {/* <h2>TOP SELLERS</h2> */}
                            TOP SELLERS
                        </div>
                        <div className='top-sellers-dropdown'>
                            <div className="dropdown">
                                {/* {window.screen.width < 400 && */}
                                <button onClick={this.showMenu} className="btn btn-secondary categories small-screen-button" type="button" id="dropdownMenuButton">
                                    <i className="fas fa-list"></i> Categories <i className="fas fa-sort-down"></i>
                                </button>
                                
                                {/* {window.screen.width > 400 &&  */}
                                <button onClick={this.showMenu} className="btn btn-secondary categories large-screen-button" type="button" id="dropdownMenuButton">
                                    <i className="fas fa-list"></i> Browse Categories <i className="fas fa-sort-down"></i>
                                </button>
                                
                                {this.state.showMenu && <div className="menu">
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'hardcover-fiction' ? 'dropdown-item active-page' : 'dropdown-item'} id='hardcover-fiction'>Fiction</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'hardcover-nonfiction' ? 'dropdown-item active-page' : 'dropdown-item'} id='hardcover-nonfiction' >Nonfiction</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'young-adult-hardcover' ? 'dropdown-item active-page' : 'dropdown-item'} id='young-adult-hardcover' >Young Adult</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'hardcover-advice' ? 'dropdown-item active-page' : 'dropdown-item'} id='hardcover-advice'>Advice</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'hardcover-graphic-books' ? 'dropdown-item active-page' : 'dropdown-item'} id='hardcover-graphic-books'>Graphics</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'childrens-middle-grade' ? 'dropdown-item active-page' : 'dropdown-item'} id='childrens-middle-grade'>Childrens</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'business-books' ? 'dropdown-item active-page' : 'dropdown-item'} id='business-books'>Business</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'celebrities' ? 'dropdown-item active-page' : 'dropdown-item'} id='celebrities'>Celebrities</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'food-and-fitness' ? 'dropdown-item active-page' : 'dropdown-item'} id='food-and-fitness'>Food and Fitness</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'religion-spirituality-and-faith' ? 'dropdown-item active-page' : 'dropdown-item'} id='religion-spirituality-and-faith'>Religion</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'travel' ? 'dropdown-item active-page' : 'dropdown-item'} id='travel'>Travel</li>
                                    <li onClick={this.changeCategory}  className={this.state.activePage === 'sports' ? 'dropdown-item active-page' : 'dropdown-item'} id='sports'>Sports</li>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className='row book-grid'>
                        {this.state.bookList.length !== 0 && this.state.bookList.map(book => {
                            return(             
                                <div className='col-lg-3 col-6 col-md-6 book-card d-flex justify-content-center' key={book.isbns[0].isbn10}>
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