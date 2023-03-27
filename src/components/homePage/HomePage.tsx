import ContactUsSection from './components/ContactUsSection'
import HeaderSection    from './components/HeaderSection'
import ServiceSection   from './components/ServiceSection'
import ChooseUsSection  from './components/WhyChooseUs'
import HowItWorks       from './components/HowItWorks'
import NewsLetter       from './components/NewsLetterSection'

import { IHomePage } from './interfaces'


const HomePage = (props :IHomePage) => {

    //-------------------------------------------------------------------
    props.onLogOutClickHandler()

    //-------------------------------------------------------------------
    return (
        <div>
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