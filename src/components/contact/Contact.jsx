import React, { useRef,useState,useEffect } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css"

const Contact = () => {

  const formRef= useRef();
    // const [done, setDone] = useState(false);
    const [isActive,setIsActive] = useState(false);
     function handleSubmit(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_v8vo86p', 'template_lmj9lba', formRef.current, 'user_cgOv3d7B8BD2pHgcOXx82')
      .then((result) => {
          console.log(result.text);
          // toggleToast();
          setIsActive(!isActive)
         
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }

  
  useEffect(() => {
    if(isActive){
      setTimeout(()=>{
        setIsActive(!isActive)
      },5000)
    }
  },[isActive] );

  return (
    <div className='contact section' id="contact">
      <h2 className="section__title">Contact Us</h2>
        <span className='section__subtitle'>Get in touch</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info animate__animated animate__fadeInUp">
                    <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>
                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">vdevelopersatvsbinfra@gmail.com</span>
                    <a href="mailto:vdevelopersatvsbinfra@gmail.com" className="contact__button">Write me <i className='bx bx-right-arrow-alt contact__button-icon' ></i></a>
                    </div>
                </div>
                <div className="contact__info animate__animated animate__fadeInUp">
                    <div className="contact__card">
                    <i className='bx bx-phone contact__card-icon' ></i>
                    <h3 className="contact__card-title">Phone</h3>
                    <span className="contact__card-data">+91 9948208728</span>
                    <a href="#" className="contact__button">Call us <i className='bx bx-right-arrow-alt contact__button-icon' ></i></a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
              <h3 className="contact__title form__title">Write us your project</h3>
                <form ref={formRef} onSubmit={handleSubmit} className='contact__form'>
                  <div className="contact__form-div">
                    <label for='' className='contact__form-tag'>Name</label>
                    <input type="text" placeholder='Enter your name' name="user_name" className="contact__form-input" />
                  </div>

                  <div className="contact__form-div">
                    <label for='' className='contact__form-tag'>Email</label>
                    <input type="email" placeholder='Enter your Email' name="user_email" className="contact__form-input" />
                  </div>

                  <div className="contact__form-div contact__form-area">
                    <label for='' className='contact__form-tag'>Message</label>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='Write your Message' className="contact__form-input "></textarea>
                  </div>
                  <div class={isActive ? 'toast active' : 'toast'}>
        <div class="toast-content">
            <i class="fas fa-solid fa-check check"></i>

            <div class="message">
                <span class="text text-1">Success</span>
                <span class="text text-2">Thanks for reaching out us</span>
            </div>
        </div>
        <i class="fa-solid fa-xmark close" onClick={()=> setIsActive(!isActive)} ></i>

        <div class={isActive ? 'progress active' : 'progress'}></div>
    </div>
                  <button type="submit" className="button">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact