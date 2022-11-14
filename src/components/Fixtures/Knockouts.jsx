import React from 'react'
import Entry from './Entry'

const Knockouts = () => {
  return (
    <div className='mb-5'>
      <section className="mt-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0 fs-5 fw-bold">Wednesday 14 December 2022</p>
                      <p style={{whiteSpace: "nowrap"}} className="m-0 fs-5 fs-5 fw-bold">Day 1</p>
                </div>
                <Entry/>
                <Entry/>
                <Entry/>
                <Entry/>
            </div>
        </section>
      <section className="mt-5">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                      <p className="m-0 fs-5 fw-bold">Wednesday 14 December 2022</p>
                      <p style={{whiteSpace: "nowrap"}} className="m-0 fs-5 fs-5 fw-bold">Day 1</p>
                </div>
                <Entry/>
                <Entry/>
                <Entry/>
                <Entry/>
            </div>
        </section>
    </div>
  )
}

export default Knockouts