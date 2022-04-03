import React from "react";
import "./video.css";
import video from "../../assets/video.mp4";
import poster from "../../assets/poster.png"
class Video extends React.Component{
  
  render(){
  return (
    <div className="hero">
      <video autoPlay muted poster={poster}id="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="content" >
      <h1 data-aos="zoom-in">vsb infra</h1>
        <p data-aos="fade-in" data-aos-delay="1200">CONTRACTORS | DEVELOPERS</p>
        <div>
          <a href='#about' className="btn">
            about us
          </a>
          <a href="#contact" className="btn btn-light">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
}

export default Video;
