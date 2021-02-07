import React, {Component} from 'react';
import axios from 'axios';
import Books from './books';

import Navbar from './navbar';
import Header from './header';

class Results extends Component {

    constructor() {
        super();
        this.state = {
            books: []
        }
    }

    initializeComponent(title) {
        const query = `https://www.googleapis.com/books/v1/volumes?q=${title}`
        axios.get(query)
            .then(res => {
                this.setState({
                    books: res.data.items
                })
            })
    }

    componentDidMount = () =>  {
        let { title } = this.props.match.params;
        this.initializeComponent(title)
    }

    componentWillReceiveProps = (nextProps) => {
        let title = nextProps.match.params.title
        this.initializeComponent(title)
    }

    render() {
        return(
            <div>
                <Navbar />
                <Header />
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='results-title'>
                            {/* <h2>TOP SELLERS</h2> */}
                            RESULTS:
                        </div>
                    </div>
                    <div className='row book-grid'>
                    {this.state.books.length == 0 && <div>LOADING</div>}
                    {this.state.books.length > 0 && 
                    this.state.books.map(book => {
                        //console.log(book.volumeInfo.industryIdentifiers[0].identifier);
                        let image;
                        let author;
                        let rating;

                        //HANDLE UNDEFINED DATA
                        book.volumeInfo.imageLinks == undefined ? image = '' : image = book.volumeInfo.imageLinks.smallThumbnail;
                        book.volumeInfo.authors == undefined ? author = '' : author = book.volumeInfo.authors[0];
                        book.volumeInfo.averageRating == undefined ? rating = 1.5 : rating = book.volumeInfo.averageRating;
                        
                        return(
                            <div className='col-lg-3 col-6 col-md-6 book-card d-flex justify-content-center'>
                                <Books title={book.volumeInfo.title}
                                authors={author}
                                image={image}
                                description={book.volumeInfo.description}
                                infoLink={book.volumeInfo.infoLink}
                                rating={rating} />
                            </div>
                        )
                    })}
                    </div>               
                </div>
            </div>
        )
    }
}

export default Results;