import React from 'react'

function TransportationField() {
    return (
        // <div>TransportationField</div>
        <>
            <div className="TransportationField">
                <div className="Transportation_first">
                    <div className='Transportation_firstTop'>
                        <img src="/img/air.png" alt="" />
                        <h1>By Air</h1>
                    </div>
                    <div className="Transportation_firstSec">
                    <h2>Nearest Airports</h2>
                    <div className='Transportation_firstSec_But'>
                        <button>New Delhi</button>
                        <button>Dehradun</button>
                    </div>
                    </div>
                    <div className="Transportation_firstThird">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam maiores quos exercitationem tempore unde voluptate quaerat officiis necessitatibus itaque, minus tenetur sequi. Eligendi quam ullam deleniti vel! Sed officia ea, ut vero esse soluta, corporis aliquid quidem consequuntur dignissimos tempore officiis in quia accusantium rerum ex pariatur corrupti sequi. Id mollitia quasi excepturi fugiat asperiores iste rem tempore voluptatibus eaque?
                    </div>
                </div>
                <div className="Transportation_Second">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.797755257255!2d77.19078306220754!3d28.54579809150143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b9055fb5%3A0x81c10b266b1ea3c0!2sIndian%20Institute%20of%20Technology%20Delhi!5e0!3m2!1sen!2sin!4v1639676149107!5m2!1sen!2sin"
                        // width={window.innerWidth > 500 ? "427px" : "100%"}
                        height="224px"
                        frameBorder="0"
                        style={{ border: "0", aspectRatio: "1/1" }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
            </div>
        </>
    )
}

export default TransportationField