import React, {useEffect, useState} from 'react'
import "./projects.css"
import Card from '../card/Card'
import Filter from '../filter/Filter'
import {projects} from "../../data";

function Projects(){  
  const [project,setProject]= useState([]);
  const [filtered,setFiltered]= useState([]);
  const [activeStatus, setActiveStatus]= useState(0);
   useEffect(()=>{
    //  fetchProjects();
    const temp=[];
    projects.map((item)=>(
      temp.push(item)
    ))
    setProject(temp);
    setFiltered(temp);
    console.log(project)
    
   },[])

   
  return (
    <div className="projects section" id='projects' >
        <h2 className='section__title' data-aos="fade-up" >Our Projects</h2>
        <span className='section__subtitle' data-aos="fade-in" data-aos-delay="100">We have worked successfully in various parts of Telangana </span>

        <Filter project={project} setFiltered={setFiltered} activeStatus={activeStatus} setActiveStatus={setActiveStatus}/>

        <div Layout className='project__container container grid'>
          {filtered.map((item)=>{
            return <Card key={item.id} item={item}/>
          })
           
          }
          </div>
        </div>
    
  )
}


export default Projects