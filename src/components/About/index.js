import React from 'react';
import photo from '../../assets/media/austinCarterHeadshot.jpg'

function About() {
  return (
    <section className="flex">
      <div className="bio">
        <h1 id="about">About Austin</h1>
        <img className="float-left" alt="Austin Carter" src={photo}></img>
        <p className="float-left">A full-stack web developer from Canton, GA.</p>
        <p>Learning new tricks every day and always looking for the next challenge.
          A history in sales and customer service attributing to great communication
          skills and a drive to be part of a winning team. With experience on both 
          front-end and back-end development, I love problem-solving to find the 
          solution to every problem. 
        </p>
      </div>
    </section>
  )
}

export default About;

