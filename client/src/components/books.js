import React from 'react';
import API from '../utils/API';
import './style.css'

function Books(props) {
    let ratingPercent = props.rating / 5 * 100;
    
    return(
        <div className='card'>
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

                    {/* <div className='row'>
                        <div className='col buttons'>
                            {props.type === 'saved' && <button className='delete-button inline' onClick={() => API.delete(props.id)}>Delete</button>}
                            {props.type !== 'saved' && <button className='save-button inline' onClick={() => API.save(props)}>Save</button>}
                        </div>
                        <div className='col buttons'>
                            <div><a href={props.infoLink}><button className='view-button inline'>View</button></a></div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col buy-button-col'>
                            <a href={props.infoLink} target ='_blank'><button className='buy'>Buy</button></a>
                        </div>
                    </div> */}
                </div>
        </div>
    )
}

export default Books;