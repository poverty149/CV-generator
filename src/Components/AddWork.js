import React, { Component } from "react";

import Work from "./Work";
import uniqid from "uniqid";

class AddWork extends Component{

    constructor(){
        super();
        
        this.state={
            
            item:{
                ele:null,
                id:uniqid(),
            },
            items:[],
  
        };

    }
    onDelete=(e)=>{
       
       this.setState({ 
           items:this.state.items.filter((item)=> item.id!==e),
        });
        
    };
    resetItem=()=>{
        this.setState({
            item:{
                ele:'',
                id:uniqid(),
            }
        })

    };
    changeItems=()=>{

        this.setState({
            items:this.state.items.concat(this.state.item),
        });
        console.log(this.state.items,"items");
        this.resetItem();
    };
    pressAddBtn=(e)=>{
        
        this.setState({
            item:{
                ele:<Work key={this.state.item.id} id={this.state.item.id} onDelete={this.onDelete} />,
                id:this.state.item.id,
            },
            });
        console.log(this.state.item.id,"i");
        this.changeItems();
        
       
        
        
        
       


    };
    
    


    render(){
        const workitems=this.state.items.map((item)=>
        <Work 
        key= {item.id}
        id={item.id}
        
        onDelete={this.onDelete}/>
        );
        // const f1=<Work/>;
        // console.log(typeof(f1),"f1");
        // var task=[];
        // task=task.concat(f1);
        // console.log(task,"updated");
        
        return(
        <div className="Work" >
            <h1 className="title">Work</h1>
            
            <div className="work_sub">
                
                {console.log(<Work/>)}
                
                {workitems}
                
            </div>
            <button type="submit" className="add" onClick={this.pressAddBtn} > Add</button>
        </div>
        );
    }
}
export default AddWork;