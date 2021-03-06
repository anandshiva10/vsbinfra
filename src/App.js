import Video from './components/video/Video';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header'
import Projects from './components/projects/Projects';
import {useState, useEffect} from 'react' ;
import SyncLoader from "react-spinners/SyncLoader";
import logo from "./assets/logo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  AOS.init({once: true,duration: 1200}); 
  
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  return (
    <div >{
      loading ?
      <div className='loader'>
      <img src={logo} alt="" className='logo_loader' />
      <SyncLoader color={"#00afef"} loading={loading}  size={15} />
      </div>
      :
      <>
      <Header/>
      <Video />
      <About/>
      <Projects/>
      <Contact/>
      </>
      }
     
    </div>
  );
}

export default App;
