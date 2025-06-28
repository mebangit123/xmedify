import React from 'react'
import NavBar from '../components/Navbar/Navbar'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import SearchHospital from '../components/SearchHospital/SearchHospital'
import HeroServices from '../components/IconLayout/HeroServices'
import Offers from '../components/Sections/Offers/Offers'
import Specialization from '../components/Sections/Specialization/Specialization'
import Specialists from '../components/Sections/Specialists/Specialists'
import PatientCaring from '../components/Sections/PatientCaring/PatientCaring'
import Blogs from '../components/Sections/Blogs/Blogs'
import OurFamilies from '../components/Sections/OurFamilies/OurFamilies'
import FAQs from '../components/Sections/FAQs/FAQs'
import DownloadApp from '../components/Sections/DownloadApp/DownloadApp'
import Footer from '../components/Footer/Footer'


function Home() {
  return (
    <div>
      <NavBar />
      <HeroSlider />
      <SearchHospital />
      <HeroServices />
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
      <FAQs />
      <DownloadApp />
      <Footer />
    </div>
  )
}

export default Home
