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
            // <nav className="navbar navbar-expand-lg navbar-light bg-light">
            //     <a className="navbar-brand" href="/">Search</a> 
            //     <a className="navbar-brand" href="/saved">Saved</a>
            // </nav>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a className="navbar-brand" href='/saved'>Saved</a>
                <form className="form-inline">
                    <input className="form-control" 
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        id='title'
                        value={this.state.title}
                        onChange={this.onChange}
                         />
                    <Link to={`/results/${this.state.title}`}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
                </form>
            </nav>
        )
    }
}

export default Navbar