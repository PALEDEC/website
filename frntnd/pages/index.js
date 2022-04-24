import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgency/MainBanner';
import OurWorks from '../components/DefaultHome/OurWorks';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

const Home =()=>{

    return(
    <>
         <NavbarTwo />
                
                <MainBanner /> 
                <OurWorks />
                <CtaAreaTwo />
                <Footer />



 
    </>)
}

export default Home