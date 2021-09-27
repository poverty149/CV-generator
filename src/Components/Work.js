import React, { Component } from "react";
import OverviewWork from "./OverviewWork";
class Work extends Component{
    constructor(){
        super();
        this.state={
            company:'',
            role:'',
            city:'',
            date:'',
            
            task:'',
            

        };
    };
    updateCompany=(e)=>{
        this.setState({
            company:e.target.value,
            
        });console.log(this.state.first);
    };
    updateRole=(e)=>{
        this.setState({
           role:e.target.value,
        });
    };
    updateCity=(e)=>{
        this.setState({
            city:e.target.value,
        });
    };
    updateDate=(e)=>{
        this.setState({
            date:e.target.value,
        });
    };
    
    updateTask=(e)=>{
        this.setState({
            task:e.target.value,
        });
    };






    render(){
        const {company,role,city,date,task}=this.state;
        const {id,onDelete}=this.props;
        
        return(
        <div  >
            <form className="work_container">
                <input type="text" onChange={this.updateCompany} value={company} placeholder="Company" />
                <input type="text" onChange={this.updateRole} value={role} placeholder="Role" />
                <input type="text" onChange={this.updateCity} value={city} placeholder="City" />
                <input type="text" onChange={this.updateDate} value={date} placeholder="Starting (Month,YYYY) - Ending (Month,YYYY) Date"/>
                
                <input type="text" onChange={this.updateTask} value={task} placeholder="Describe tasks accomplished" maxLength="120" />
                
                
                <button type="submit" className="delete" onClick={() => onDelete(id)}>Delete</button>
            </form>
            <div className="cv">
                <OverviewWork  elements={this.state}/>
            </div>
            
        </div>
        );
    }
}
export default Work;