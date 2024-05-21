import React from "react";
import Links from "./Links";


function About(props) {
  console.log(props)
  const bioText = props.bio

  function bio(){
    if(bioText) {
    return <p>{props.bio}</p>
    }
  }


  return (
    <div id="about">
      <h2>About Me</h2>
      
      {bio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin}></Links>
    </div>
  );
}
export default About;