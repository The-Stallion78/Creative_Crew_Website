import React from 'react';
import Common from './Common';

// import i from '../Final_Project/Images/i.jpeg';
// import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>

      <Common 
        Info = "Grow your business with" 
        BrandName = "Creative Crew"
        Developers = "We are the talented developers offering various Freelance works." 
        Buttons = "Get Started"
        visit = '/service'
      />

    </>
  );
}
