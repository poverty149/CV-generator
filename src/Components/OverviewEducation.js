import React from "react";

const OverviewEducation=(props)=>{
    const {elements} =props;
    return <div id="cv_edu" className="cv_edu">
        <h1 className="institute">{elements.institute} </h1>
        <h2 className="city">{elements.city}</h2>
        <h3 className="degree">{elements.degree} </h3>
        <h3 className="gpa">CGPA : {elements.gpa}</h3>
        <p className="period">{elements.start}</p>
      
    </div>
    
}
export default OverviewEducation;