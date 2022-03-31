import React from 'react'
import { useState } from 'react'
import './card.css'
const Card = ({item}) => {
  const [modal,setModal] = useState(false);
  var model= false
  const toggleModal = () => {
    setModal(!modal)
    model=!modal
    if(model){
      document.body.style.overflow="hidden"
      console.log('hello')
    }
    else{
      document.body.style.overflow="auto"
    }
  }

  return (
    <>
    <div className={`project__card ${item.filter}`}>
      <img src={item.img} alt="" className="project__img" />
      <div className="card__details">
      <div className="card__item">
      <h3 className="project__name">{item.title}</h3>
      <h6 className="project__location">{item.site}</h6>
      </div>
      <div className="card__item">
      <a onClick={toggleModal} className="project__modal-toggle">
        Read more <i className="bx bx-right-arrow-alt project__icon"></i>
      </a>
      </div>
      {modal && (
        <div className="project__modal">
        <div className="project__modal-content">
        <a onClick={toggleModal} className="project__modal-close">
        <i className='bx bx-x project__modal-icon'></i>
        </a>
        <h3 className='project__modal-title'>{item.title}</h3>
        <h5 className="project__modal-location"> <i class='bx bxs-map'></i> {item.site}</h5>
        <span className="bar"></span>
        <ul className='project__modal-list'>
          {item.points.split(",").map((x) => {
            return (
              <li className="project__modal-points">
                <i className="bx bx-check project__modal-icon"></i>
                <p className="project__modal-info"> {x}</p>
              </li>
            );
          })}
        </ul>
        <h5 className='project__modal-projectBy'>Project by</h5>
        <h3 className='project__modal-client'>{item.client}</h3>
        </div>
      </div>
      )}
      </div>
    </div>
    </>
  )
}

export default Card