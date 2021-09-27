import React from "react";

const OverviewWork=(props)=>{
    const {elements} =props;
    return <div id="cv_work" className="cv_work">
        
        <h1 className="company">{elements.company} </h1>
        <h2 className="city">{elements.city}</h2>
        <h3 className="role">{elements.role}</h3>
        <p className="period">{elements.date}</p>
        <p className="task">{elements.task}</p>
      
    </div>
    
}
export default OverviewWork;