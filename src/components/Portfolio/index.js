import React from 'react';

function Portfolio() {

  const projects = ([
    {
      name: "Fork That Orc",
    },
    {
      name: "foxy"
    },
    {
      name: "Dollar Caller"
    }
  ])
  return(
    <div className="flex-row projects">
      {projects.map((project, i) => (
        <img
          src={require(`../../assets/projects/${project.name}.png`)}
          alt={`${project.name} screenshot.`}
          className="img-thumbnail mx-1"
          key={project.name}
        />
      ))}
    </div>
  )
}

export default Portfolio;