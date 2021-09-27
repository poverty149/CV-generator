import React, { Component } from "react";
import OverviewBasic from "./Overview_Basic";
class Basic extends Component{
    constructor(){
        super();
        this.state={
            first:'',
            last:'',
            address:'',
            description:'',
            phoneNumber:'',
            email:'',
            photo:'',
            title:'',
            

        };
    }
    
    updateFirst=(e)=>{
        this.setState({
            first:e.target.value,
            
        });console.log(this.state.first);
    };
    updateLast=(e)=>{
        this.setState({
           last:e.target.value,
        });
    };
    updateAddress=(e)=>{
        this.setState({
            address:e.target.value,
        });
    };
    updateDescription=(e)=>{
        this.setState({
            description:e.target.value,
        });
    };
    updateEmail=(e)=>{
        this.setState({
            email:e.target.value,
        });
    };
    updatePhone=(e)=>{
        this.setState({
            phoneNumber:e.target.value,
        });
    };
    updatePhoto=(e)=>{
        this.setState({
            photo:e.target.value,
        });
    };
    updateTitle=(e)=>{
        this.setState({
            title:e.target.value.toUpperCase(),
        });
    };

    
    render(){
        const {first,last,address,description,phoneNumber,email,photo,title}=this.state;

        return(
        <div>
            <h1>Personal Info</h1>
            <form>
                <input type="text" onChange={this.updateFirst} value={first} placeholder="First name" />
                <input type="text" onChange={this.updateLast} value={last} placeholder="Surname" />
                <input type="text" onChange={this.updatePhoto} value={photo} placeholder="Photo"/>
                <input type="text" onChange={this.updateTitle} value={title} placeholder="title"/>
                
                <input type="text" onChange={this.updateAddress} value={address} placeholder="Address" />
                
                <input type="text" onChange={this.updateEmail} value={email} placeholder="Email"/>
                <input type="text" onChange={this.updatePhone} value={phoneNumber} placeholder="Phone number"/>
                <input type="text" onChange={this.updateDescription} value={description} placeholder="Description" maxLength="400" />
                
            </form>
            <div className="cv">
                <h1>Personal Info</h1>
                <OverviewBasic  elements={this.state}/>
            </div>
        </div>
        );
    }
}
export default Basic;