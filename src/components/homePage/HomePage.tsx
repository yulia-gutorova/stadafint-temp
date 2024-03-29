import './css/HomePage.css'

import ContactUsSection from './components/ContactUsSection'
import HeaderSection    from './components/HeaderSection'
import ServiceSection   from './components/ServiceSection'
import ChooseUsSection  from './components/WhyChooseUs'
import HowItWorks       from './components/HowItWorks'
import NewsLetter       from './components/NewsLetterSection'

import { IHomePage } from './interfaces'
import { useEffect } from 'react'


const HomePage = (props :IHomePage) => {

    //-------------------------------------------------------------------
    props.onLogOutClickHandler()

    //-------------------------------------------------------------------
    return (
        <div className='home-page-main-container'>
            <HeaderSection></HeaderSection>
            <ContactUsSection></ContactUsSection>
            <ServiceSection></ServiceSection>
            <ChooseUsSection></ChooseUsSection>
            <HowItWorks></HowItWorks>
            <NewsLetter></NewsLetter>
        </div>
    )
}
export default HomePage