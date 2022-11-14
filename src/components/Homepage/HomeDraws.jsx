import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DrawEntry from '../Draws/DrawEntry';

const HomeDraws = () => {
  return (
    <>
    <div className="mx-auto bg-gradient" style={{ height: "6px", width: "75%" }}></div>
    <div style={{}}>
        <div className='bg-gradient py-3'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <p className='fs-2 text-center'>Draws</p>
                </div>
                <div style={{backgroundColor: "white", height : "40px"}} className='col-10'>
                <div className='center-inside'>
                    <input className='w-100 border-0' placeholder='Select Sport'></input>
                    <KeyboardArrowDownIcon/>
                </div>
                </div>
            </div>
        </div>
        <div className='mt-4 row' style={{ justifyContent : "space-between", flexWrap : "wrap", height: "400px", overflow :"scroll"}}>
            <div className='col-6'>
                <DrawEntry/>
            </div>
            <div className='col-6'>
                <DrawEntry/>
            </div>
            <div className='col-6'>
                <DrawEntry/>
            </div>
            <div className='col-6'>
                <DrawEntry/>
            </div>
            <div className='col-6'>
                <DrawEntry/>
            </div>
            <div className='col-6'>
                <DrawEntry/>
            </div>
            <div className='col-6'>
                <DrawEntry/>
            </div>
            <div className='col-6'>
                <DrawEntry/>
            </div>
        </div>
        <div style={{height : "48px"}} className='row'>
            <div className='col-12 h-100'>
                <div style={{justifyContent : "right"}} className='center-inside'>
                    <p className='text-end m-0 me-4'>View All Fixtures <span><ArrowForwardIosIcon/></span></p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeDraws