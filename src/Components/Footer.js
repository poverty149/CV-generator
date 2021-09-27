import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
class Footer extends Component{

    render(){
        return(
            <footer id="footer"className="footer">
                <p>Copyright © ParvathyUK &nbsp; </p>
                <a href="https://github.com/poverty149" className="fab fa-github" >
        <FaGithub/>
        </a>
            </footer>
        );
    }
}
export default Footer;