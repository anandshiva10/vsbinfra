import React,{ useEffect } from 'react'

function Filter({setActiveStatus,activeStatus,setFiltered,project}) {
  useEffect(()=>{
    if(activeStatus=== 0)
    {
      setFiltered(project);
      return;
    }
    const filtered= project.filter((item)=>
      item.status.includes(activeStatus)
    );
    setFiltered(filtered);
  },[activeStatus]);
  return (
    <>
    <div className="work__filters">
          <button className={activeStatus=== 0 ? "work__item active-work" : "work__item"} onClick={()=>setActiveStatus(0)}>All</button>
          <button  className={activeStatus=== 1 ? "work__item active-work" : "work__item"} onClick={()=>setActiveStatus(1)}>Ongoing</button>
          <button  className={activeStatus=== 2 ? "work__item active-work" : "work__item"} onClick={()=>setActiveStatus(2)}>Completed</button>
        </div>
    </>
  )
}

export default Filter