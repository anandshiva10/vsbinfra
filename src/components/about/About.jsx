import React from 'react'
import "./about.css"
import road from "../../assets/img/services/road.svg"
import park from "../../assets/img/services/park.svg"
import arch from "../../assets/img/services/arch.svg"
import avenue from "../../assets/img/services/avenue.svg"
import home from "../../assets/img/services/home.svg"
import rain from "../../assets/img/services/rain.svg"
import tank from "../../assets/img/services/tank.svg"
import wall from "../../assets/img/services/wall.svg"
const About = () => {
  return (
    <div className='about section' id='about'>
        <div className="about-us container">
          <div className="about-title"> <h2 className="about__title">About us</h2></div>
          <div className="about-info">
          <p>
          VSB Infra is one of the most competitive developers in Hyderabad's real estate sector with a two decade long industry experience. We are established in 2019 with a mission to become the leaders in the development and infrastructure business, led by our founder, <b>V.Venkatesh</b>.
          </p>
          <br></br><p>We, at VSB Infra, offer wide range of high end amenities and services with assured quality. Over the years, we have contributed in development of various parts across Hyderabad in and around IT-corridor. Well known for living up to the expectations of the clients, we are committed to satisfy our client's requirement by providing world-class and innovative infrastructure services.Client satisfaction remains to be the continuos guiding principle of our organization. We focus on delivering high quality work within the quoted budget and committed timeline.
          </p>
          </div>
        </div>
        
        <div className="mvo container">
          <div className="mvo_block">
            <h2 className='mvo_title'>OUR MISSION</h2>
            <p className='mvo_data'>To become a key player in the real-estate development and infrastructure industry by delivering projects adopting international technology and standards and reach the client's expectations.
            </p>
          </div>
          <div className="mvo_block">
            <h2 className='mvo_title'>OUR VISION</h2>
            <p className='mvo_data'>To create an outstanding portfolio of ventures and perform exceptionally well in all aspects in the industry by providing innovative, reliable and high quality services to our clients.
              </p>
          </div>
          <div className="mvo_block">
            <h2 className='mvo_title'>OUR PHILOSOPHY</h2>
            <p className='mvo_data'>As a company we strive for the very best, and we demand the same of all our staff. Each member has core skills and capabilities they bring to the Construction Process, and excel at the core objectives of any construction project.
              </p>
          </div>
        </div>

        <div className="about_services container">
        <h3 className='services_title'>Our Services</h3>
        <div className="services">
          <div className="services_box">
            <div className="services_icon"><img src={road} alt="" className='services_img'/></div>
            <div className="services_info"><h3 className='info_text'>60' 40' BT Roads</h3></div>
          </div>
          <div className="services_box">
            <div className="services_icon"><img src={wall} alt="" className='services_img'/></div>
            <div className="services_info"><h3 className='info_text'>All round compound</h3></div>
          </div>
          <div className="services_box">
            <div className="services_icon"><img src={home} alt="" className='services_img'/></div>
            <div className="services_info"><h3 className='info_text'>Ready for construction plots</h3></div>
          </div>
          <div className="services_box">
            <div className="services_icon"><img src={park} alt="" className='services_img'/></div>
            <div className="services_info"><h3 className='info_text'>Children's park</h3></div>
          </div>
          <div className="services_box">
            <div className="services_icon"><img src={tank} alt="" className='services_img'/></div>
            <div className="services_info"><h3 className='info_text'>Overhead water tank</h3></div>
          </div>
          <div className="services_box">
            <div className="services_icon"><img src={rain} alt="" className='services_img'/></div>
            <div className="services_info"><h3 className='info_text'>Water harvesting pits</h3></div>
          </div>
          <div className="services_box">
            <div className="services_icon"><img src={avenue} alt="" className='services_img'/></div>
            <div className="services_info"><h3 className='info_text'>Avenue plantation</h3></div>
          </div>
          <div className="services_box">
            <div className="services_icon"><img src={arch} alt="" className='services_img'/></div>
            <div className="services_info"><h3 className='info_text'>Entrance arch</h3></div>
          </div>
          </div>
        </div>
    </div>
    
  )
}

export default About