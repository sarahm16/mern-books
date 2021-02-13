import React, { Component } from 'react';
import API from '../utils/API';
import './style.css';

class Books extends Component {
    constructor() {
        super();
        this.state={
            rating: 0,
            showToast: false,
            fadeOut: false
        }
    }

    componentDidMount() {
        // console.log(this.props.rating)
        console.log(this.props)
        let ratingPercent = this.props.rating / 5 * 100;
        this.setState({rating: ratingPercent});
    }

    fadeOut = () => {
        this.setState({fadeOut: true});
        setTimeout(this.setState({showToast: false}), 3000);
    }

    saveBook = () =>  {
        this.setState({showToast: true});
        setTimeout(this.fadeOut, 1000);
        API.save(this.props);
    }

    async deleteBook() {
        //props.updateSaved();
        API.delete(this.props.id)
    }

    updateSaved = () => {
        this.deleteBook().then(() => {this.props.updateSaved()})
    }

    render() {
        return(
                <div className='card'>
                    {/* {this.state.showToast && <div className='toast'>Saved!!</div>} */}
                    
                    <a href={this.props.infoLink} target='_blank' className='google-link'></a>
                    
                    <div className='image'>
                        {this.state.showToast && <div className={this.state.fadeOut ? 'saved-toast visible' : 'saved-toast fadeOut'}>BOOK SAVED</div>}
                        <img src={this.props.image} id='image' /></div>
                    <div className='card-body'>
                        <div className='about'>
                            <div className='title'>{this.props.title}</div>
                            {/* {props.authors !== '' && <div className='authors'>By {props.authors}</div>} */}
                        </div>

                        <div className='rating'>
                            <div className="stars-outer">
                                <div className="stars-inner" style={{width: this.state.rating}}></div>
                            </div>
                        </div>

                        <div className='buttons'>
                            {this.props.type === 'saved' && <button className='delete-button inline' onClick={this.updateSaved}>Delete</button>}
                            {this.props.type !== 'saved' && <button className='save-button inline' onClick={this.saveBook}>Save</button>}
                        </div>

                    </div>
            </div>
    )}
}

export default Books;