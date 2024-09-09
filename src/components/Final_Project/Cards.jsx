import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Cards(props) {
    return (
        <>

            <div className='col-md-4 col-10 mx-auto'>
                <div className='card'>
                    <img src={props.imgSrc} className='card-img-top' alt='Card one' />
                    <div className='card-body'>
                        <h5 className='card-title'>{props.serviceName} </h5>
                        <p className='card-text'>
                            {props.serviceDescription}
                        </p>
                        <NavLink to={props.direct} className='btn btn-primary'> {props.Button} </NavLink>
                    </div>
                </div>
            </div>

        </>
    );
}
