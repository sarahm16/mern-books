import React, {Component} from 'react';
import axios from 'axios';
import Books from './books';

class Results extends Component {

    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        console.log(this.props.title)
        const query = `https://www.googleapis.com/books/v1/volumes?q=${this.props.title}`
        axios.get(query)
            .then(res => {
                this.setState({
                    books: res.data.items
                })
            })
    }

    render() {
        console.log()
        return(
            this.state.books.map(book => {
                return(
                    <Books title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    image={book.volumeInfo.imageLinks.smallThumbnail}
                    description={book.volumeInfo.description}
                    infoLink={book.volumeInfo.infoLink} />
                )
            })
            
        )
    }
}

export default Results;