import React from 'react';
import API from '../utils/API';
import './style.css'

function Books(props) {
    //console.log('books props: ' + props.image)
    console.log(props.type)
    return(
        // <div className='container border'>

        //     <div className='row'>

        //         <div className='col-lg-10 text-left'>
        //             <h4><strong>{props.title}</strong></h4>
        //             <h6>Written by {props.authors}</h6>
        //         </div>

        //         <div className='col-lg-2'>
        //             <div className='inline'>
        //                 {props.type === 'saved' && <button onClick={() => API.delete(props.id)}>Delete</button>}
        //                 {props.type !== 'saved' && <button onClick={() => API.save(props)}>Save</button>}
        //             </div>
        //             <div className='inline'><a href={props.infoLink}><button>View</button></a></div>
        //         </div>
                
        //     </div>

        //     <div className='row'>

        //         <div className='col-lg-2'>
        //             <img src={props.image} />
        //         </div>

        //         <div className='col-lg-10'>
        //             <p>{props.description}</p>
        //         </div>
        //     </div>

        // </div>
        <div className='card'>
                <img src={props.image} id='image' />
                {/* <div className='row'>
                    {props.title}
                    <br />
                    {props.authors}
                </div> */}
                <div className='card-body'>
                    {/* <div className='card-title'>{props.title}</div> */}
                    <div className='card-text'>
                        <div className='buttons inline'>
                            {props.type === 'saved' && <button className='delete-button' onClick={() => API.delete(props.id)}>Delete</button>}
                            {props.type !== 'saved' && <button className='save-button' onClick={() => API.save(props)}>Save</button>}
                        </div>
                        <div className='buttons inline'>
                            <div className='inline'><a href={props.infoLink}><button className='view-button'>View</button></a></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Books;