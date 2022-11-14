import React from 'react'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import HotelRoundedIcon from '@mui/icons-material/HotelRounded';

function AccomodationField() {
    return (
        <>
            <div className="AccomodationField">
                <div className="AccomodationFieldDiv">
                    Hotel Prakash Inn
                </div>
                <div className="AccomodationFieldDiv">
                    <HotelRoundedIcon />
                    <span>Hotel Prakash Inn, near century gate, roorkee</span>
                </div>
                <div className="AccomodationFieldDiv" style={{display:"flex",alignItems:"center"}}>
                    {/* <button className='ButtonSend'>Rs 1500 - 3000</button> */}
                    <button className="border-gradient py-2 px-3 d-none d-lg-block">Rs 1500 - 3000</button>
                    <button>View Map</button>
                    <ArrowForwardIosRoundedIcon style={{ marginLeft: '40px' }} />
                </div>
            </div>
            <hr className='Divider_line' />
        </>
    )
}

export default AccomodationField