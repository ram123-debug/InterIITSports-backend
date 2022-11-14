import React from 'react'

const Banner = (props) => {
  return (
    <section className='bg-gradient' style={{color : "var(--purple-font)", height : "192px"}}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col">
                        <p className="fs-1 m-0 fw-bold text-center text-lg-start">{props.title}</p>
                    </div>
                </div>
            </div>
    </section>
  )
}
export default Banner