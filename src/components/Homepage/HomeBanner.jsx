import React from 'react'
import ImageLogo from '../UsefullCommonComponents/ImageLogo/ImageLogo';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import "./home.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

import delhi from "../../assets/iits-logo/delhi.png"
import roorkee from "../../assets/iits-logo/roorkee.png"
import kgp from "../../assets/iits-logo/kgp.png"
import madras from "../../assets/iits-logo/madras.png"
import bombay from "../../assets/iits-logo/bombay.png"
import jammu from "../../assets/iits-logo/jammu.png"
import kanpur from "../../assets/iits-logo/kanpur.png"
import guwhati from "../../assets/iits-logo/guwhati.png"
import ropar from "../../assets/iits-logo/ropar.png"
import dhanbad from "../../assets/iits-logo/dhanbad.png"
import bhillai from "../../assets/iits-logo/bhillai.png"
import bhubneshwar from "../../assets/iits-logo/bhubneshwar.png"
import dharwad from "../../assets/iits-logo/dharwad.png"
import gandhinagar from "../../assets/iits-logo/gandhinagar.png"
import goa from "../../assets/iits-logo/goa.png"
import hydrabad from "../../assets/iits-logo/hydrabad.png"
import indore from "../../assets/iits-logo/indore.png"
import jodhpur from "../../assets/iits-logo/jodhpur.png"
import mandi from "../../assets/iits-logo/mandi.png"
import palakkad from "../../assets/iits-logo/palakkad.png"
import patna from "../../assets/iits-logo/patna.png"
import tirupati from "../../assets/iits-logo/tirupati.png"
import varanasi from "../../assets/iits-logo/varanasi.png"



const HomeBanner = () => {
  return (
    <>
      <div className='bg-svg'></div> 
      <section className="bg-gradient" style={{ height: "538px"}}></section>
      <div className='d-lg-flex d-none flex-column justify-content-around py-5' style={{position : "absolute", top : "69px", right : "10%", height : "538px", zIndex : "10"}}>
            <InstagramIcon style={{writingMode: "vertical-rl", color : "var(--purple-font)"}} className='mb-5'/>
            <FacebookIcon style={{writingMode: "vertical-rl", color : "var(--purple-font)"}} className='mb-5' />
            <YouTubeIcon style={{writingMode: "vertical-rl", color : "var(--purple-font)"}} className='mb-5'/>
            <TwitterIcon style={{writingMode: "vertical-rl", color : "var(--purple-font)"}} className='mb-5'/>
      </div>
      <div className='d-lg-flex d-none flex-column justify-content-around py-5' style={{position : "absolute", top : "69px", left : "10%", height : "538px", zIndex : "10"}}>
            <p className='fw-bold  fs-5' style={{writingMode: "vertical-rl", color : "var(--purple-font)"}}>16</p>
            <p className='fw-bold  fs-5' style={{writingMode: "vertical-rl", color : "var(--purple-font)"}}>December</p>
            <p className='fw-bold fs-5' style={{writingMode: "vertical-rl", color : "var(--purple-font)"}}>2022</p>
      </div>
      <section style={{position : "absolute", top : "69px" , height : "538px", left : "0" , right : "0"}}>
      <div  className="container h-100">
                    <div className="h-100 d-flex flex-column justify-content-around">
                        <div style={{marginTop : "100px"}}  className="row justify-content-center align-items-center">
                            <div className="col-12 text-center col-lg-4">
                                <ImageLogo/>
                            </div>
                            <div className="col-11 col-lg-5 mt-lg-0 mt-4">
                                <div className="row">
                                    <div style={{ backgroundColor: "#AE10D5", height: "126px" }} className="col-3">
                                        <div className="center-inside h-100">
                                            <p style={{ color: "white" }} className="fs-2 text-center m-0" >70 Days</p>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#F83ADA", height: "126px" }} className="col-3">
                                        <div className="center-inside h-100">
                                            <p style={{ color: "white" }} className="fs-2 text-center m-0" >34 Hours</p>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#AE10D5", height: "126px" }} className="col-3">
                                        <div className="center-inside h-100">
                                            <p style={{ color: "white" }} className="fs-2 text-center m-0" >23 Minutes</p>
                                        </div>
                                    </div>
                                    <div style={{ backgroundColor: "#F83ADA", height: "126px" }} className="col-3">
                                        <div className="center-inside h-100">
                                            <p style={{ color: "white" }} className="fs-2 text-center m-0" >TO GO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-12">
                                    <p style={{color : "var(--purple-font)"}} className="fs-1 text-center fw-bold"><i> INSERT SLOGAN </i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
            <section style={{ backgroundColor: "var(--bg-light)", height: "75px" }}>
                <div className="container h-100">
                    <div className="row align-items-center h-100 justify-content-between">
                        <div className="col-12 col-lg-3">
                            <p className="text-muted m-0 text-center text-lg-start">PARTICIPATING INSTITUTES SITES <span><OpenInNewIcon /></span> </p>
                        </div>
                        <div className="col-9 d-none d-lg-block h-100 py-3">
                            <div className="h-100 d-flex">
                              <img alt='NULL' src={delhi}></img>
                              <img alt='NULL' src={bhillai}></img>
                              <img alt='NULL' src={bhubneshwar}></img>
                              <img alt='NULL' src={bombay}></img>
                              <img alt='NULL' src={dhanbad}></img>
                              <img alt='NULL' src={dharwad}></img>
                              <img alt='NULL' src={gandhinagar}></img>
                              <img alt='NULL' src={goa}></img>
                              <img alt='NULL' src={guwhati}></img>
                              <img alt='NULL' src={hydrabad}></img>
                              <img alt='NULL' src={indore}></img>
                              <img alt='NULL' src={jammu}></img>
                              <img alt='NULL' src={jodhpur}></img>
                              <img alt='NULL' src={kanpur}></img>
                              <img alt='NULL' src={kgp}></img>
                              <img alt='NULL' src={madras}></img>
                              <img alt='NULL' src={mandi}></img>
                              <img alt='NULL' src={palakkad}></img>
                              <img alt='NULL' src={patna}></img>
                              <img alt='NULL' src={roorkee}></img>
                              <img alt='NULL' src={ropar}></img>
                              <img alt='NULL' src={tirupati}></img>
                              <img alt='NULL' src={varanasi}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
    </>
  )
}

export default HomeBanner