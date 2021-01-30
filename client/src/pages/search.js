import React, { Component } from 'react';
import Results from '../components/results';
import TopBooks from './topBooks';
import Navbar from '../components/navbar';
import Header from '../components/header';

import API from '../utils/API';

import './search.css';

class Search extends Component {
    
    constructor() {
        super()
        this.state = {
            title: "",
            topBooks: [],
            isSubmitted: false
        }
    }

    componentDidMount() {
        API.getTopBooks()
            .then(res => {
                this.setState({topBooks: res})
            })
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value,
            isSubmitted: false
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            isSubmitted: true
        })
    }

    render() {
        return(
            <div>
                <Navbar />
                <Header />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="input-group mb-3">
                            <input
                                className='form-control'
                                placeholder='Search books by title or author'
                                onChange={this.onChange}
                                value={this.state.title}
                                id="title">
                            </input>                    
                            <div className="input-group-append">
                                <button onClick={this.onSubmit} className='btn btn-outline-success my-2 my-sm-0' type='submit'>Search</button>
                            </div>
                        </div>                        
                    </div>

                    <div className='row'>
                        {!this.state.isSubmitted &&
                        this.state.topBooks.length !== 0 && <TopBooks bookList={this.state.topBooks} />}
                    </div>

                    <div className='row'>
                        {this.state.isSubmitted && <Results title={this.state.title} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;