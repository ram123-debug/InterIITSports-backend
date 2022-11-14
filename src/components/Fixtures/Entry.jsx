import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StadiumIcon from '@mui/icons-material/Stadium';
import { useState, useRef, useEffect} from "react";
import FixturesPopup from "./FixturesPopup";

function useOutsideAlerter(ref, setPopup) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setPopup(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
}

function Entry() {

    var [showPopup, setPopup] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setPopup);
    return (
        <>
        {showPopup ? <div className="fix-popup-overlay"> <div ref = {wrapperRef}> <FixturesPopup/> </div></div>: ""}
        <hr></hr>
        <div style={{ height: "50px" }} className="container">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="center-inside">
                        <p className="m-0">Pool A</p>
                    </div>
                </div>

                <div className="d-flex align-items-center justify-content-center">
                    <div className="center-inside">
                        <p className="me-3 my-0">Delhi</p>
                    </div>
                    <img className="me-3 d-none d-lg-block" style={{ width: "45px" , height : "45px"}} src="https://drive.google.com/uc?export=view&id=1nfZp1H0vxApcdYSQfwoB2HugA2_tGi_e"></img>
                    <div className="me-3 d-none d-lg-block" style={{ border: "1px solid" }}>
                        <p className="my-0 py-2 px-2">16:32</p>
                    </div>
                    <img className="me-3 d-none d-lg-block" style={{ width: "45px" , height : "45px"}} src="https://drive.google.com/uc?export=view&id=1nfZp1H0vxApcdYSQfwoB2HugA2_tGi_e"></img>
                    <div className="center-inside">
                        <p className="me-lg-3 my-0">Delhi</p>
                    </div>
                    <div className="bg-gradient d-none d-lg-block">
                        <p className="text-center m-0 py-2 px-3 fs-5 fw-bold">3-2</p>
                    </div>
                </div>
                <div className="d-none d-lg-block">
                    <div className="center-inside">
                        <p className="m-0 fw-bold"><span><StadiumIcon /></span> Dhyan Chand Stadium, IIT Roorkee</p>
                    </div>
                </div>
                <div>

                </div>
                <div style={{ border: "1px solid grey" }} className="center-inside text-center h-100">
                    <p className="m-0 py-2 px-3">Live Stream</p>
                </div>
                <div className="center-inside">
                    <ArrowForwardIosIcon onClick = {() => setPopup(true)}/>
                </div>
            </div>
        </div>
        </>    
    )
}

export default Entry