import React,{useState} from 'react'
import './header.css';
const Header = () => {

    const [color, setColor] = useState(false)
    const [activeNav, setActiveNav] = useState('#')
    const changeColor =() => {
        if(window.scrollY >= 250) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)
    
  return (
<>
<div className={color ? 'header header-bg' : 'header'}>
<nav className="nav container">
                <a href="#" className={color ? 'nav__logo' : 'nav__logo nav__logo-hidden'}>vsb infra</a>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? "nav__link active-link" : "nav__link"}><i className='bx bx-home-alt'></i></a>
                        </li>
                        
                        <li className="nav__item">
                            <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? "nav__link active-link" : "nav__link"}><i className='bx bxs-business'></i></a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" onClick={()=> setActiveNav('#projects')} className={activeNav === '#projects' ? "nav__link active-link" : "nav__link"}><i className='bx bxs-news'></i></a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? "nav__link active-link" : "nav__link"}><i className='bx bx-message-square-detail'></i></a>
                        </li>
                        
                    </ul>
                </div>

            </nav>

            </div>
</>
  )
}

export default Header;