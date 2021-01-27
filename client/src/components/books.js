import React from 'react';
import API from '../utils/API';
import './style.css'

function Books(props) {
    //console.log('books props: ' + props.image)
    console.log(props.type)
    return(
        <div className='container border'>

            <div className='row'>

                <div className='col-lg-10 text-left'>
                    <h4><strong>{props.title}</strong></h4>
                    <h6>Written by {props.authors}</h6>
                </div>

                <div className='col-lg-2'>
                    <div className='inline'>
                        {props.type === 'saved' && <button onClick={() => API.delete(props.id)}>Delete</button>}
                        {props.type !== 'saved' && <button onClick={() => API.save(props)}>Save</button>}
                    </div>
                    <div className='inline'><a href={props.infoLink}><button>View</button></a></div>
                </div>
                
            </div>

            <div className='row'>

                <div className='col-lg-2'>
                    <img src={props.image} />
                </div>

                <div className='col-lg-10'>
                    <p>{props.description}</p>
                </div>
            </div>

        </div>
    )
}

export default Books;