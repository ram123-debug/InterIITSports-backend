import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import HomeAbout from './HomeAbout'
import HomeBanner from './HomeBanner'
import HomeDraws from './HomeDraws'
import HomeGallery from './HomeGallery'
import HomeNews from './HomeNews'

const Home = () => {
  return (
    <>
        <HomeBanner/>
        <div className='container my-5'>
            <div className='row justify-content-between'>
                <div className='col-lg-4 col-12 pe-lg-5 pe-0'>
                    <HomeDraws/>
                </div>
                <div className='col-lg-8 col-12'>
                    <HomeNews/>
                </div>
            </div>
        </div>
        <HomeAbout/>
        <HomeGallery/>
    </>
  )
}

export default Home