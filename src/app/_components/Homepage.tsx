import React from 'react'
import NavBar from './NavBar/NavBar'
import Home1 from './Homepageparts/Home1'
import Home2 from './Homepageparts/Home2'
import TalentAcquisitioncard from './TalentAcquisition/TalentAcquisitionCard'
import FAQs from './Homepageparts/FAQSection/FAQs'
import LastHeroSection from './Homepageparts/LastHeroSection'
import Footer from './Homepageparts/Footer'

const Homepage = () => {
  return (
    <div>

        {/* <NavBar/> */}
        <Home1/> 
        <Home2/>
        <TalentAcquisitioncard/>
        <FAQs/>
        <LastHeroSection/>
        <Footer/>
    </div>
  )
}

export default Homepage
