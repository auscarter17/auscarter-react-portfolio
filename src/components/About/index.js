import React from 'react';
import photo from '../../assets/media/austinCarterHeadshot.jpg'

function About() {
  return (
    <section className="flex">
      <div className="bio">
        <h1 id="about">About Austin</h1>
        <img className="float-left" alt="Austin Carter" src={photo}></img>
        <p className="float-left">A full-stack web developer from Canton, GA.</p>
      </div>
    </section>
  )
}

export default About;

