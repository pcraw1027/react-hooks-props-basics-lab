import React from "react";
// import About from "./About";


function Links(props) {
    // const links = props.github;
    // console.log(links);
    return (
    <div>
        <h3>Links</h3> 
        <a href={props.github}>{props.github}</a>
        <a href={props.linkedin}>{props.linkedin}</a>
    </div>
    )
}

export default Links;