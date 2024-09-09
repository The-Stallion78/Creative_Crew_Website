import React from 'react';
import i from '../Final_Project/Images/i.jpeg';
import { NavLink } from 'react-router-dom';

export default function Common(props) {
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
          <div className='row '>
            <div className='col-10 mx-auto'>
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column '>
                  <h1>
                    {props.Info} <strong className='brand-name'> {props.BrandName} </strong>
                  </h1>
                  <h2 className='my-3'>
                    {props.Developers}
                  </h2>
                  <div className='mt-3'>
                    <NavLink to={props.visit} className='btn btn-outline-primary rounded-pill btn-get-started'>
                      {props.Buttons}
                    </NavLink>
                  </div>
                </div>

                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img
                    src={i}
                    alt="Business Growth"
                    className='img-fluid animated'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
