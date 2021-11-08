import React from "react";
import Links from "./Links";
function About(props) {

    if (props.user.bio){
        return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.user.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={props.user.links}/>
    </div>)}else {
      return null }
}

export default About;
