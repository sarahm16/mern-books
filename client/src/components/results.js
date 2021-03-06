import React, {Component} from 'react';
import axios from 'axios';
import Books from './books';

import Navbar from './navbar';
import Header from './header';
import LoadingBar from './loading';

class Results extends Component {

    constructor() {
        super();
        this.state = {
            books: [],
            totalItems: 0,
            loading: true
        }
    }

    initializeComponent(title) {
        const query = `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=20`
        axios.get(query)
            .then(res => {
                console.log(res.data.items === undefined);
                if(res.data.items !== undefined) {
                    this.setState({
                        books: res.data.items
                    })
                }
                this.setState({
                    // books: res.data.items,
                    totalItems: res.data.totalItems,
                    loading: false
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

                    {!this.state.loading && <div className='row'>
                        <div className='results-title'>
                            RESULTS:
                        </div>
                    </div>}
                    
                    {this.state.loading && <div className='row'>
                        <LoadingBar />
                    </div>}


                    <div className='row book-grid'>
                        {this.state.totalItems === 0 &&
                            <div>
                                No Results
                            </div>
                        }
                        {this.state.totalItems > 0 && 
                            this.state.books.map(book => {

                                //console.log(book.volumeInfo.industryIdentifiers[0].identifier);
                                let image;
                                let author;
                                let rating;
                                //let key = book.volumeInfo.industryIdentifiers[0].identifier;
                                let key = Math.floor(Math.random() * 100000000000);

                                //HANDLE UNDEFINED DATA
                                book.volumeInfo.imageLinks == undefined ? image = '' : image = book.volumeInfo.imageLinks.smallThumbnail;
                                book.volumeInfo.authors == undefined ? author = '' : author = book.volumeInfo.authors[0];
                                book.volumeInfo.averageRating == undefined ? rating = 2.5 : rating = book.volumeInfo.averageRating;
                                
                                return(
                                    <div className='col-lg-3 col-6 col-md-6 book-card d-flex justify-content-center' key={key}>
                                        <Books title={book.volumeInfo.title}
                                        authors={author}
                                        image={image}
                                        description={book.volumeInfo.description}
                                        infoLink={book.volumeInfo.infoLink}
                                        rating={rating}
                                        id={key} />
                                    </div>
                                )
                            })
                        }
                    </div>               
                </div>
            </div>
        )
    }
}

export default Results;