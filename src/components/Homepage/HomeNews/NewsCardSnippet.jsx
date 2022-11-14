import React from 'react'

const NewsCardSnippet = () => {
  return (
    <div style={{ backgroundColor: "#F8F8F8" }} className='row px-2 align-items-center'>
            <div style={{ borderRight: "5px solid #35D3E8" }} className='col-3 g-0'>
                <img src="https://drive.google.com/uc?export=view&id=1W2CRWLwIPu1Fv_Zw6diEv_OAt9-y4-Gq"></img>
            </div>
            <div className='col-8 h-100'>
                <div className='row h-100 align-items-center'>
                    <div className='col-12 align-items-center'>
                        <p style={{color : "#35D3E8"}} className='m-0 w-100 fs-5'>Weightlifting</p>
                    </div>
                    <div className='col-12'>
                        <p className='m-0 fw-bold'>See which teams have qualified</p>
                    </div>
                </div>


            </div>
        </div>
  )
}

export default NewsCardSnippet