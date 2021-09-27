import React, { Component } from "react";
import OverviewEducation from "./OverviewEducation";
class Education extends Component{
    constructor(props){
        super(props);
        
        this.state={
            institute:'',
            degree:'',
            // major:'',
            city:'',
            start:'',
            // end:'',
            gpa:'',
            
            

        };
    }
    updateInstitute=(e)=>{
        this.setState({
            institute:e.target.value,
            
        });console.log(this.state.institute);
    };
    updateDegree=(e)=>{
        this.setState({
           degree:e.target.value,
        });
    };
    // updateMajor=(e)=>{
    //     this.setState({
    //        major:e.target.value,
    //     });
    // };
    updateCity=(e)=>{
        this.setState({
            city:e.target.value,
        });
    };
    updateStart=(e)=>{
        this.setState({
            start:e.target.value,
        });
    };
    // updateEnd=(e)=>{
    //     this.setState({
    //         end:e.target.value,
    //     });
    // };
    updateGPA=(e)=>{
        this.setState({
            gpa:e.target.value,
        });
    };
    render(){
        const {institute,city,degree,start,gpa}=this.state;
        const {id,onDelete}=this.props;
        return(
        <div >
            <form className="edu_container">
                <input type="text" onChange={this.updateInstitute} value={institute} placeholder="Institute Name" />
                <input type="text" onChange={this.updateCity} value={city} placeholder="City" />
                <input type="text" onChange={this.updateDegree} value={degree} placeholder="Degree and Major" />
                {/* <input type="text" onChange={this.updateMajor} value={major} placeholder="Major" /> */}
                <input type="text" onChange={this.updateStart} value={start} placeholder="Start(Month,YYYY) - End Date(Month,YYYY)"/>
                
                <input type="number" onChange={this.updateGPA} value={gpa} placeholder="CGPA"/>
                <button type="submit" className="delete" onClick={() => onDelete(id)} >Delete</button>
                
            </form>
            <div className="cv">
                <OverviewEducation  elements={this.state}/>
            </div>
            
        </div>
        );
    }
}
export default Education;