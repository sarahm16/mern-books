import React, { Component } from 'react';
import Results from '../components/results';
import TopBooks from './topBooks';
import Navbar from '../components/navbar';
import Header from '../components/header';

import API from '../utils/API';

import './style.css';

class Landing extends Component {
    
    constructor() {
        super()
        this.state = {
            topBooks: [],
            isSubmitted: false
        }
    }

    componentDidMount() {
        API.getTopBooks('hardcover-fiction')
            .then(res => {
                this.setState({topBooks: res})
            })
    }

    render() {
        return(
            <div>
                <Navbar page='topsellers' />
                <Header />
                <div className='container-fluid'>
                    <div className='row'>
                        {this.state.topBooks.length !== 0 && <TopBooks bookList={this.state.topBooks} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;