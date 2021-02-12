import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            showMenu: false
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        //console.log(this.state.title)
    }

    showMenu = () => {
        console.log('show menu');
        this.setState({showMenu: !this.state.showMenu})
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
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 w-100">
                <button className="navbar-toggler" type="button" onClick={this.showMenu} aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                

                <div className="collapse navbar-collapse py-2" >
                    <ul className="navbar-nav mr-auto py-0">
                        <li className="nav-item">
                            <a className="nav-link text-left" href="/">Top Sellers <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-left" href="/saved">Saved</a>
                        </li>
                    </ul>
                </div>

                <form className="form-inline my-2 my-lg-0 search-form py-0" >
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
            {this.state.showMenu && 
                <div className='menu'>
                    <a className="nav-link text-left" href="/">Top Sellers <span className="sr-only">(current)</span></a>
                    <a className="nav-link text-left" href="/saved">Saved</a>
                </div>
                }
            </div>

            // <div className='navbar'>
            //     <div className='small-screen-nav'>

            //     </div>

            //     <div className='large-screen-nav row'>
            //         <div className='links col'>
            //             <div className='nav-item'>
            //                 <a className="nav-link text-left" href="/">Top Sellers <span className="sr-only">(current)</span></a>
            //             </div>
            //             {/* <div className='nav-item'>
            //                 <a className="nav-link text-left" href="/saved">Saved</a>
            //             </div> */}
            //         </div>
            //         <div className='search col ml-auto'>
            //             <form className="form-inline my-2 my-lg-0 search-form py-0 ml-auto" >
            //                 <input className="form-control" 
            //                     type="search"
            //                     placeholder="Search"
            //                     aria-label="Search"
            //                     id='title'
            //                     value={this.state.title}
            //                     onChange={this.onChange}
            //                     />
            //                 <Link to={`/results/${this.state.title}`}><button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button></Link>                
            //             </form>  
            //         </div>                  
            //     </div>
            // </div>
        )
    }
}

export default Navbar