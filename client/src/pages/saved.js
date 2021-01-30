import React, { Component } from 'react';

import Books from '../components/books';
import Navbar from '../components/navbar';
import Header from '../components/header';

import API from '../utils/API';

class Saved extends Component {

    constructor() {
        super();
        this.state = {
            saved: []
        }
    }

    componentDidMount() {
        API.getSaved()
            .then(res => {
                console.log(res.data)
                this.setState({
                    saved: res.data
                })
            })
    }

    render() {
        return(
        <div>
            <Navbar />
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    {this.state.saved.map(book => {
                        return(
                            <div className='col-lg-3 col-6 col-md-6 book-card d-flex justify-content-center'>
                                <Books type='saved'
                                id={book._id}
                                title={book.title}
                                authors={book.authors}
                                image={book.image}
                                description={book.description}
                                infoLink={book.infoLink}
                                rating={book.rating} />
                            </div>
                        )
                    })} 
                </div>
            </div>
        </div>
            
        )}
}

export default Saved