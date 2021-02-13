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

    getSaved = () => {
        API.getSaved()
            .then(res => {
                console.log(res.data)
                this.setState({
                    saved: res.data
                })
            })
    }

    componentDidMount() {
        this.getSaved()
    }

    updateSaved = () => {
        this.getSaved();
    }

    render() {
        return(
        <div>
            <Navbar page='saved' />
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                        <div className='saved-title'>
                            {/* <h2>TOP SELLERS</h2> */}
                            SAVED:
                        </div>
                    </div>
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
                                rating={book.rating} 
                                updateSaved={this.updateSaved}/>
                            </div>
                        )
                    })} 
                </div>
            </div>
        </div>
            
        )}
}

export default Saved