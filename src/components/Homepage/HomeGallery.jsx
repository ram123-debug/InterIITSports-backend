import React from 'react'
import images from '../../assets/ImageData';

function createImage(image, index) {

  return (
    <div key={index} className={"col-6 g-0 col-lg-3"}>
      <img className='hover-zoom' style={{ height: "250px" }} src={image.img}></img>
    </div>
  )
}

const HomeGallery = () => {
  return (
    <section className="mt-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-2">
            <p className="fs-1 m-0">Gallery</p>
          </div>
          <div className="col-6">
            <p style={{ color: "var(--font-light)" }} className="m-0">A showcase about the different sports in Inter IIT Sports Meet 2022.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          {images.map((image, index) => createImage(image, index))}
        </div>
      </div>
    </section>
  )
}

export default HomeGallery