import React from 'react'
import ImageLogo from '../UsefullCommonComponents/ImageLogo/ImageLogo';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <>
      <section></section>
      <section style={{ backgroundColor: "var(--purple-font)", color: "white" }}>
        <div className='container py-5'>
          <div className='d-flex flex-column'>
            <div>
              <p className="fs-1 text-center text-lg-start">55th Inter IIT Sports Meet 2022</p>
            </div>
            <div className='d-flex flex-column flex-lg-row justify-content-between mt-4'>
              <div className='d-flex flex-column align-items-center align-items-lg-start me-4'>
                <p className='fs-4'>Links</p>
                <p style={{ color: "var(--font-light)" }}>Home</p>
                <p style={{ color: "var(--font-light)" }}>Draws</p>
                <p style={{ color: "var(--font-light)" }}>Fixtures</p>
                <p style={{ color: "var(--font-light)" }}>Results</p>
                <p style={{ color: "var(--font-light)" }}>Accomodation</p>
                <p style={{ color: "var(--font-light)" }}>Transportation</p>
              </div>
              <div className='d-flex justify-content-center'>
                <div className='d-flex flex-column me-4 align-items-center align-items-lg-start'>
                  <p className="fs-4">Address Delhi</p>
                  <p className='text-center text-lg-start' style={{ color: "var(--font-light)" }}>Indian Institute of Technology Roorkee Roorkee- 247667, Haridwar Uttrakhand, India Phone: (O) 01332- 28-5311 Email: registrar@iitr.ac.in</p>
                </div>
                <div className='d-flex flex-column me-4 align-items-center align-items-lg-start'>
                  <p className="fs-4">Address Delhi</p>
                  <p className='text-center text-lg-start' style={{ color: "var(--font-light)" }}>Indian Institute of Technology Roorkee Roorkee- 247667, Haridwar Uttrakhand, India Phone: (O) 01332- 28-5311 Email: registrar@iitr.ac.in</p>
                </div>
                
              </div>

              <div className='d-flex flex-column align-items-center align-items-lg-start'>
                <p className='fs-4'>Contact Us</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.797755257255!2d77.19078306220754!3d28.54579809150143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b9055fb5%3A0x81c10b266b1ea3c0!2sIndian%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1639676149107!5m2!1sen!2sin"
                  width= {window.innerWidth > 500 ? "427px" : "100%"}
                  height= "224px"
                  frameBorder="0"
                  style={{ border: "0", aspectRatio: "1/1" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                />
              </div>

            </div>

              <div className="d-flex justify-content-lg-start justify-content-center mt-5">
                <InstagramIcon className='me-lg-5 me-3 ms-0' />
                <FacebookIcon className='mx-lg-5 mx-3' />
                <YouTubeIcon className='mx-lg-5 mx-3' />
                <TwitterIcon className='mx-lg-5 mx-3' />

            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#D9D9D9", height: "69px" }}>
        <div className="container h-100">
          <div className="row h-100 justify-content-between">
            <div className="col-lg-4 col-12 h-100">
              <div className="center-inside">
                <p className="m-0">Copywrite © Indian Institute of Technology Roorkee</p>
              </div>
            </div>
            <div className="col-4 col-lg-2 d-none d-lg-block h-100">
              <div className="center-inside">
                <ImageLogo />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    
  )
}

export default Footer