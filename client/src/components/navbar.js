import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            title: ''
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        console.log(this.state.title)
    }

    render() {
        return(
            // <nav className="navbar navbar-light bg-light justify-content-between">
            //     <a className="navbar-brand" href='/saved'>Saved</a>
            //     <a className='navbar-brand' href='/'>Top Sellers</a>
            //     <form className="form-inline">
                    // <input className="form-control" 
                    //     type="search"
                    //     placeholder="Search"
                    //     aria-label="Search"
                    //     id='title'
                    //     value={this.state.title}
                    //     onChange={this.onChange}
                    //      />
            //         <Link to={`/results/${this.state.title}`}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
            //     </form>
            // </nav>

            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse py-0" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto py-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Top Sellers <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/saved">Saved</a>
                        </li>
                    </ul>
                </div>

                <form className="form-inline my-2 my-lg-0 search-form py-0">
                    <input className="form-control" 
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        id='title'
                        value={this.state.title}
                        onChange={this.onChange}
                         />
                    <Link to={`/results/${this.state.title}`}><button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button></Link>                
                </form>
            </nav>
        )
    }
}

export default Navbar