import "./fixtures.css"


const FixturesPopup = () => {

    return (
            <div className='d-flex fix-popup-inside flex-column align-items-center py-5'>
                <div className='mb-3'>
                    <p className='m-0'>Pool A</p>
                </div>
                <div className='mb-3'>
                    <button style={{ borderRadius: "20px" }} className='bg-gradient py-2 px-3 border-0'>Quarter Final</button>
                </div>
                <div className='row w-100 fw-bold mb-3 justify-content-center'>
                    <div className='col-lg-5 col-12'>
                        <p className='m-0 text-lg-end text-center fs-5'>Wed. 14th Dec, 6:30 PM</p>
                    </div>
                    <div className='col-1 d-none d-lg-block'>
                        <p className='m-0 text-center fs-5'>|</p>
                    </div>
                    <div className='col-lg-5 col-12'>
                        <p className='m-0 text-lg-start text-center fs-5'>Dhyan Chand Stadium, IIT Roorkee</p>
                    </div>
                </div>
                <div className='d-flex w-100 justify-content-center'>
                    <div className='d-flex flex-column'>
                        <img alt="NULL" style={{height : "164px", width : "164px"}} src="https://drive.google.com/uc?export=view&id=1nfZp1H0vxApcdYSQfwoB2HugA2_tGi_e" ></img>
                        <p className='fs-5 text-center fw-bold'>Roorkee</p>
                        <p className='text-center'>Playing / Team</p>
                        <div style={{color : "var(--font-light)"}} className='d-flex justify-content-between'>
                            <p>Playing</p>
                            <p>Playing</p>
                        </div>
                        <div style={{color : "var(--font-light)"}} className='d-flex justify-content-between'>
                            <p>Playing</p>
                            <p>Playing</p>
                        </div>
                        <div style={{color : "var(--font-light)"}} className='d-flex justify-content-between'>
                            <p>Playing</p>
                            <p>Playing</p>
                        </div>
                        <div style={{color : "var(--font-light)"}} className='d-flex justify-content-between'>
                            <p>Playing</p>
                            <p>Playing</p>
                        </div>
                    </div>
                    <div className='mt-5 mx-5'>
                        <img alt="NULL" className='mx-auto' style={{height : "81px", width : "77px"}} src="https://drive.google.com/uc?export=view&id=1aLb_irxViWeb1bfQy2AnJVFqkSWro8eg"></img>
                    </div>
                    <div className='d-flex flex-column'>
                        <img alt="NULL" style={{height : "164px", width : "164px"}} src="https://drive.google.com/uc?export=view&id=1nfZp1H0vxApcdYSQfwoB2HugA2_tGi_e" ></img>
                        <p className='fs-5 text-center fw-bold'>Roorkee</p>
                        <p className='text-center'>Playing / Team</p>
                        <div style={{color : "var(--font-light)"}} className='d-flex justify-content-between'>
                            <p>Playing</p>
                            <p>Playing</p>
                        </div>
                        <div style={{color : "var(--font-light)"}} className='d-flex justify-content-between'>
                            <p>Playing</p>
                            <p>Playing</p>
                        </div>
                        <div style={{color : "var(--font-light)"}} className='d-flex justify-content-between'>
                            <p>Playing</p>
                            <p>Playing</p>
                        </div>
                        <div style={{color : "var(--font-light)"}} className='d-flex justify-content-between'>
                            <p>Playing</p>
                            <p>Playing</p>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default FixturesPopup