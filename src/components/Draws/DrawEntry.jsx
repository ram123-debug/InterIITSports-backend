import React from 'react'

const DrawEntry = () => {
  return (
    <>
        <div style={{backgroundColor : "var(--bg-light)"}} className='d-flex flex-column ps-3 py-4 mb-4'>
            <p className='text-start fs-5 fw-bold'>Pool A</p>
            <div className='d-flex align-items-center'>
                <img style={{ width: "45px" , height : "45px"}} src="https://drive.google.com/uc?export=view&id=1nfZp1H0vxApcdYSQfwoB2HugA2_tGi_e"></img>
                <p className='ms-2 my-0'>Delhi</p>
            </div>
            <div className='d-flex align-items-center'>
                <img style={{ width: "45px" , height : "45px"}} src="https://drive.google.com/uc?export=view&id=1nfZp1H0vxApcdYSQfwoB2HugA2_tGi_e"></img>
                <p className='ms-2 my-0'>Roorkee</p>
            </div>
            <div className='d-flex align-items-center'>
                <img style={{ width: "45px" , height : "45px"}} src="https://drive.google.com/uc?export=view&id=1nfZp1H0vxApcdYSQfwoB2HugA2_tGi_e"></img>
                <p className='ms-2 my-0'>Madras</p>
            </div>
        </div>
    </>
  )
}

export default DrawEntry