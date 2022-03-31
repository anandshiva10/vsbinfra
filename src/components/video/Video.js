import React from "react";
import "./video.css";
import video from "../../assets/video.mp4";

class Video extends React.Component{
  
  render(){
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="content" >
      <h1>vsb infra</h1>
        <p>CONTRACTORS | DEVELOPERS</p>
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
