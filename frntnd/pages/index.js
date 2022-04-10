import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import MainBanner from '../components/ItAgency/MainBanner';
import OurWorks from '../components/DefaultHome/OurWorks';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import OurServices from '../components/ItAgency/OurServices';
import ServiceStyleTwo from '../components/ItAgency/ServiceStyleTwo';
import WhyChooseUs from '../components/ItAgency/WhyChooseUs';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import Feedback from '../components/Common/Feedback';
import PricingStyleThree from '../components/Pricing/PricingStyleThree';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import LatestNewsSliderTwo from '../components/Common/LatestNewsSliderTwo';
import Newsletter from '../components/Common/Newsletter';
import Footer from '../components/Layouts/Footer';
import Partner from '../components/Common/Partner';

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