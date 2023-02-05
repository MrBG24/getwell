import React from 'react'
import Announcement from '../../components/Announcement'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import SectionOne from './SectionOne'
import SectionThree from './SectionThree'
import SectionTwo from './SectionTwo'

const LearnMore = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
        <Footer/>
    </div>
  )
}

export default LearnMore
