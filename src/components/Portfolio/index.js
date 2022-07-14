import React from 'react';

function Portfolio() {


  const projects = ([
    {
      name: "Fork That Orc",
      github: 'https://github.com/auscarter17/fork-that-orc',
      liveUrl: 'https://forkthatorc.herokuapp.com/'
    },
    {
      name: "foxy",
      github: 'https://github.com/auscarter17/Foxy',
      liveUrl: 'https://auscarter17.github.io/Foxy/'
    },
    {
      name: "Thought Boxer",
      github: 'https://github.com/JoelHauser/runescapethree',
      liveUrl: 'https://thoughtboxer.herokuapp.com/'
    },
    {
      name: "Dollar Caller",
      github: 'https://github.com/auscarter17/Dollar-Caller',
      liveUrl: 'https://dollar-caller.herokuapp.com/'
    },
    {
      name: 'Horiseon',
      github: 'https://github.com/auscarter17/horiseon',
      liveUrl: 'https://auscarter17.github.io/horiseon/'
    },
    {
      name: 'Food Festival',
      github: 'https://github.com/auscarter17/food-festival',
      liveUrl: 'https://auscarter17.github.io/food-festival/'
    }
  ])
  return(
    <div className="projects">
      <div className='flex-row project-container'>
        {projects.map((project, i) => (
          <div className='repoText'>
            <p>{project.name}</p>
            <a className='githubText' href={`${project.github}`}>View Repo</a>
            <a className='liveText' href={`${project.liveUrl}`}>View Live App</a>
            

            <img
            src={require(`../../assets/projects/${project.name}.png`)}
            alt={`${project.name} screenshot.`}
            className="img-thumbnail mx-1 project-image"
            key={project.name}
            
            
            />

          </div>
          
        ))}
      </div>

    </div>
  )
}

export default Portfolio;