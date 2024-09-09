import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import AppDevelopment from './AppDevelopment';
import WebDevelopment from './WebDevelopment';
import ContentWriting from './ContentWriting';
import GraphicDesigning from './GraphicDesigning';
import UIDesigning from './UIDesigning';
import OnlineCourses from './OnlineCourses';
import Footer from './Footer';
import './Index.css';

// "homepage": "https://The-Stallion78.github.io/Creative-Crew-Website",

export default function Main() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/AppDevelopment" element={<AppDevelopment />} />
        <Route exact path="/WebDevelopment" element={<WebDevelopment />} />
        <Route exact path="/ContentWriting" element={<ContentWriting />} />
        <Route exact path="/GraphicDesigning" element={<GraphicDesigning />} />
        <Route exact path="/UIDesigning" element={<UIDesigning />} />
        <Route exact path="/OnlineCourses" element={<OnlineCourses />} />
        
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

    </>
  );
}
