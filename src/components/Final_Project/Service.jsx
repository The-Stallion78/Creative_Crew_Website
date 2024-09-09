import React from 'react';
import Cards from './Cards';
import WebDev from './Images/WebDev.webp';
import Mobile from './Images/Mobile.webp';
import image7 from './Images/image7.avif';
import GD from './Images/GD.jpeg';
import UIdesign from './Images/UIdesign.webp';
import Online from './Images/Online.webp';


export default function Service() {
  return (
    <>


      <div className='my-5'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>

              <Cards 
                serviceName = "Web Development" 
                serviceDescription = "We Provide powerful, responsive, and use-friendly websites tailored to meet your business goals and elevate your online presence." 
                Button = 'See More' 
                imgSrc = {WebDev} 
                direct = '/WebDevelopment'
              />
              <Cards 
                serviceName = "Mobile App Development" 
                serviceDescription = "Crafting user-friendly mobile apps that deliver seamless performance across all platforms to meet your business needs." 
                Button = 'See More'
                imgSrc = {Mobile} 
                direct = '/AppDevelopment'
              />
              
              <Cards 
                serviceName = "Content Writing" 
                serviceDescription = "Engaging, SEO-optimized content that drives traffic, captivates readers, and enhances your brand’s communication strategy." 
                Button = 'See More'
                imgSrc = {image7} 
                direct = '/ContentWriting'
              />
              
              <Cards 
                serviceName = "Graphic Designing" 
                serviceDescription = "Creating visually striking designs that communicate your brand’s message, elevating your visual identity to new heights." 
                Button = 'See More'
                imgSrc = {GD} 
                direct = '/GraphicDesigning'
              />
              
              <Cards 
                serviceName = "UI/UX Designing" 
                serviceDescription = "Designing intuitive, user-centric interfaces that offer exceptional user experiences and enhance product functionality." 
                Button = 'See More'
                imgSrc = {UIdesign} 
                direct = '/UIDesigning'
              />
              
              <Cards 
                serviceName = "Online Courses" 
                serviceDescription = "Providing expertly designed courses to empower learners, enhancing skills through interactive, accessible learning platforms." 
                Button = 'See More'
                imgSrc = {Online} 
                direct = '/OnlineCourses'
              />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
