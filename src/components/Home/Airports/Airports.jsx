import React from 'react'
import "./Airport.css"
import airport1 from "../../../assets/images/airport1.png"
import airport2 from "../../../assets/images/airport2.png"
import airport3 from "../../../assets/images/airport3.png"
import airport4 from "../../../assets/images/airport4.png"
import airport5 from "../../../assets/images/airport5.png"
import shape from "../../../assets/images/shape.png"

function Airports() {
  return (
    <>
    <div className="popular-airports">
        <div className="wrapper airports">
        <div className="aiports-section-heading">
            <h5>What is your next destination</h5>
            <h2>Popular Airports</h2>
        </div>
        <div className="aiport-images d-flex flex-wrap justify-content-center align-items-center" >
            <div className="airport-image-section1">
                <div className='airport-img'>
                    <img src={airport1} alt="aiport-image" />
                 <img className="shape" src={shape} alt="filter-over-image" />
                 <div className="text-within-image">
                        <h3>A transfer to/from</h3>
                        <h4>London Heathrow Airport</h4>
                    </div>
                </div>
                <div className='airport-img'>
                    <img src={airport2} alt="aiport2" />
                    <img className="shape" src={shape} alt="filter-over-image" />
                    <div className="text-within-image">
                        <h3>A transfer to/from</h3>
                        <h4>London Heathrow Airport</h4>
                    </div>
                </div>
            </div>
            <div className="airport-image-section2">
                <div className='airport-img'>
                 <img src={airport3} alt="airport-image" />
                 <img className="shape" src={shape} alt="filter-over-image" />
                 <div className="text-within-image">
                        <h3>A transfer to/from</h3>
                        <h4>London Heathrow Airport</h4>
                    </div>
                </div>
            </div>
            <div className="airport-image-section3">
                <div className='airport-img'>
                 <img src={airport4} alt="airport-image" />
                 <img className="shape" src={shape} alt="filter-over-image" />
                 <div className="text-within-image">
                        <h3>A transfer to/from</h3>
                        <h4>London Heathrow Airport</h4>
                    </div>
                </div>
                <div className="airport-img">
                    <img src={airport5} alt="airport-image" />
                 <img className="shape" src={shape} alt="filter-over-image" />
                 <div className="text-within-image">
                        <h3>A transfer to/from</h3>
                        <h4>London Heathrow Airport</h4>
                    </div>

                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Airports