import React from 'react'
import "./Hero.scss"
import vector from "../../../assets/images/Line Vector.png"
import reviewImg1 from "../../../assets/images/header-user1.png";
import reviewImg2 from "../../../assets/images/header-user2.png";
import reviewImg3 from "../../../assets/images/header-user3.png";
import reviewImg4 from "../../../assets/images/header-user4.png";
import star from "../../../assets/images/star.png"
import searchIcon from "../../../assets/images/search-icon.png";
import luggageIcon from "../../../assets/images/luggage-icon.png";
import passengerIcon from "../../../assets/images/passenger-icon.png";
import dateIcon from "../../../assets/images/date-icon.png";
import clockIcon from "../../../assets/images/clock-icon.png";
import line from "../../../assets/images/vertical-line.png";
function Hero() {
  return (
    <>
    <section className="hero-section">
    <div className='wrapper Hero'>
     <div className="hero-data-section">
        <div className="text-data">
            <h1>Lorem ipsum dolor sit amet, consectetur admpus lacus. Integer ut odioti</h1>
            <img src={vector} alt="" className='arc-line' />
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, risus eget fermentum efficitur, augue sapien tincidunt lacus, nec</h2>
        </div>
        <div className="hero-reviews">
          <div className="review-user-images">
          <img src={reviewImg1} alt="review-img1" style={{marginRight:"-12px"}}/>
          <img src={reviewImg2} alt="review-img2" style={{marginRight:"-12px"}}/>
          <img src={reviewImg3} alt="review-img3" style={{marginRight:"-12px"}}/>
          <img src={reviewImg4} alt="review-img14" style={{marginRight:"-12px"}}/>
          <div className='more-users' style={{marginRight:"-12px"}}><p>3+</p></div>
          </div>
          <div className="review-ratings">
            <div className="hero-stars">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            </div>
            <div>
            <p>8 (Reviews)</p>
            </div>
            
          </div>
          
        </div>
     </div>
     <div className="hero-form-section">
      <form action="submit">
      <h3>From</h3>
      <div className="input-field">
      <img src={searchIcon} alt="search-icon" className='form-icon'/>
      <input type="search" placeholder='Airport, address, station, port'/>
      </div>
      <h3>To</h3>
      <div className="input-field">
      <img src={searchIcon} alt="search-icon" className='form-icon'/>
      <input type="search" placeholder='Airport, address, station, port'/>
      </div>
      <div className="passenger-luggage w-100">
      <div className='w-50'>
      <h3>Passengers</h3>
      <div className="input-field form-control">
      <img src={passengerIcon} alt="search-icon" className='form-icon'/>
      <input type="number" placeholder='2'/>
      </div>
      </div>
      <div className='w-50'>
      <h3>Luggage</h3>
      <div className="input-field ">
      <img src={luggageIcon} alt="search-icon" className='form-icon'/>
      <input type="search" placeholder='2' />
      </div>
      </div>
      </div>
      <h3>Pickup date & Time</h3>
      <div className="date-time form-control w-100">
        <div className="datetime w-50">
        <img src={dateIcon} alt="date-icon" />
        <input type="text" placeholder='28-3-2023'/>
        </div>
        <img src={line} className='line' alt='line'/>
        <div className="datetime w-50 px-2">
        <img src={clockIcon} alt="date-icon"/>
        <input type="text"  placeholder="20:05" />
        </div>
      </div>
      <button className="search-button">Search</button>
      </form>
     </div>
    </div>
    </section>
    </>

  )
}

export default Hero