import React, { Component } from 'react';
import Results from '../components/results';

import './search.css';

class Search extends Component {
    
    constructor() {
        super()
        this.state = {
            title: "",
            isSubmitted: false
        }
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
                    {this.state.isSubmitted && <Results title={this.state.title} />}
                </div>
            </div>
        )
    }
}

export default Search;