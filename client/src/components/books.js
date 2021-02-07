import React from 'react';
import API from '../utils/API';
import './style.css';

import axios from 'axios';

function Books(props) {
    let ratingPercent = props.rating / 5 * 100;
    // console.log(props);
    // axios.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?isbn=9780143034759')
    //     .then(res => {
    //         console.log(res)
    //     })
    //console.log(props)
    
    return(
            <div className='card'>
                <a href={props.infoLink} target='_blank' className='google-link'></a>
                <div className='image'><img src={props.image} id='image' /></div>
                <div className='card-body'>
                    <div className='about'>
                        <div className='title'>{props.title}</div>
                        {/* {props.authors !== '' && <div className='authors'>By {props.authors}</div>} */}
                    </div>

                    <div className='rating'>
                        <div className="stars-outer">
                            <div className="stars-inner" style={{width: ratingPercent}}></div>
                        </div>
                    </div>

                    <div className='buttons'>
                        {props.type === 'saved' && <button className='delete-button inline' onClick={() => API.delete(props.id)}>Delete</button>}
                        {props.type !== 'saved' && <button className='save-button inline' onClick={() => API.save(props)}>Save</button>}
                    </div>

                </div>
        </div>
    )
}

export default Books;