import React, { useState } from 'react'

const HomeAbout = () => {
  const [onInfo, setOnInfo] = useState("interIIT") 
  return (
    <section className="py-5" style={{ backgroundColor: "var(--bg-light)" }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-12">
            <p className="fs-1 text-center text-lg-start ">About</p>
            <div className="mx-auto bg-gradient" style={{ height: "6px", width: "75%" }}></div>
            <div style={{ backgroundColor: "#ECECEC" }} className="row justify-content-center pt-3">
              <div className="col-10">

                <img  alt='NULL'  src='https://drive.google.com/uc?export=view&id=1LDpN7UYxyEGzs5FyHxApDBHJlhh6AeD4'></img>
              </div>
              <div className="row mt-3 mx-0 px-0">
                <div className="col-3 g-0">
                  <img  alt='NULL' src='https://drive.google.com/uc?export=view&id=1fDrxFMqHOybG6eZ30LdqKOC09YzAAP4E'></img>

                </div>
                <div className="col-3 g-0">

                  <img  alt='NULL' src='https://drive.google.com/uc?export=view&id=1FGqgWRLy8lWzZaFOZH1WzgO1aXFZiNXP'></img>

                </div>
                <div className="col-3 g-0">
                  <img alt='NULL'  src='https://drive.google.com/uc?export=view&id=15qa7pf8N0rl32ShmTloqnTx4Pr2TkmV_'></img>


                </div>
                <div className="col-3 g-0">
                <img alt='NULL'  src='https://drive.google.com/uc?export=view&id=1fDrxFMqHOybG6eZ30LdqKOC09YzAAP4E'></img>


                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12 mt-3 mt-lg-0">
            <div className="row justify-content-lg-between justify-content-around">
              <div className="col-12 col-lg-5">
                <p onClick={() => setOnInfo("interIIT")} className={(onInfo === "interIIT" ? "text-gradient" : "text-boundary") + " fs-1 text-lg-start text-center fw-bold"}><a>Inter IIT 2022</a></p>
              </div>
              <div className="col-5 col-lg-3">
              <p onClick={() => setOnInfo("timeline")} className={(onInfo === "timeline" ? "text-gradient" : "text-boundary") + " fs-1 text-lg-start text-center fw-bold"}><a>Timeline</a></p>
              </div>
              <div className="col-5 col-lg-3">
              <p onClick={() => setOnInfo("helpdesk")} className={(onInfo === "helpdesk" ? "text-gradient" : "text-boundary") + " fs-1 text-lg-start text-center fw-bold"}><a>Helpdesk</a></p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout