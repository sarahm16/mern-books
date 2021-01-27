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
        // {this.state.books.length > 0 && console.log(this.state.books[0]);}
        return(
            <div className='container-fluid'>
                <div className='row'>
                {this.state.books.length == 0 && <div>LOADING</div>}
                {this.state.books.length > 0 && 
                this.state.books.map(book => {
                    console.log(book)
                    let image;
                    console.log(book.volumeInfo.imageLinks == undefined)
                    book.volumeInfo.imageLinks == undefined ? image = '' : image = book.volumeInfo.imageLinks.smallThumbnail;
                    return(
                        <div className='col-lg-3 col-sm-1 col-md-6 book-card'>
                            <Books title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            image={image}
                            description={book.volumeInfo.description}
                            infoLink={book.volumeInfo.infoLink} />
                        </div>
                    )
                })}
                </div>               
            </div>
        )
    }
}

export default Results;