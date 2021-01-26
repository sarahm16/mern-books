import React, { Component } from 'react';

import Books from '../components/books';

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
        return this.state.saved.map(book => {
            console.log(book)
            return <Books type='saved'
            id={book._id}
            title={book.title}
            authors={book.authors}
            image={book.image}
            description={book.description}
            infoLink={book.infoLink} />
        })
    }
}

export default Saved