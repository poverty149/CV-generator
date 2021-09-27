import React from "react";

const OverviewBasic=(props)=>{
    const {elements} =props;
    return <div id="cv_basic" className="cv_basic">
        
        <h1 className="name">{elements.first} {elements.last}</h1>
        <div className="title_wrapper">
        <h2 className="title">{elements.title}</h2>
        </div>
        
        <p className="address"><strong>ADDRESS</strong> <br/>{elements.address}</p>
        <h2 className="profile">Profile</h2>
        <p className="description">  {elements.description}</p>
        <h2 className="email"> <strong>EMAIL</strong> <br/>{elements.email}</h2>
        <h3 className="number"> <strong>PHONE</strong><br/>{elements.phoneNumber}</h3>
        <img src={elements.photo}  className="photo" alt="Avatar"/>
    </div>
    
}
export default OverviewBasic;