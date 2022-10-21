import React from 'react';

function Portfolio() {


  const projects = ([
    {
      name: "Fork That Orc",
      github: 'https://github.com/auscarter17/fork-that-orc',
      liveUrl: 'https://forkthatorc.herokuapp.com/',
      desc: `An RPG character generator that allows you to choose stats and gear randomly, or generate your own.`
    },
    {
      name: "foxy",
      github: 'https://github.com/auscarter17/Foxy',
      liveUrl: 'https://auscarter17.github.io/Foxy/',
      desc: `A creative writing tool that allows you to randomly generate a character to use in works of fiction.`
    },
    {
      name: "Thought Boxer",
      github: 'https://github.com/JoelHauser/runescapethree',
      liveUrl: 'https://thoughtboxer.herokuapp.com/',
      desc: `A social app that allows you to vote on situations or ask for others to give you an outlook on your own.`
    },
    {
      name: "Dollar Caller",
      github: 'https://github.com/auscarter17/Dollar-Caller',
      liveUrl: 'https://dollar-caller.herokuapp.com/',
      desc: `A simple budgeting tool that allows you to keep track of spending.`
    },
    {
      name: 'Horiseon',
      github: 'https://github.com/auscarter17/horiseon',
      liveUrl: 'https://auscarter17.github.io/horiseon/',
      desc: `A landing page for a business.`
    },
    {
      name: 'Food Festival',
      github: 'https://github.com/auscarter17/food-festival',
      liveUrl: 'https://auscarter17.github.io/food-festival/',
      desc: `A webpage for a food festival that showcases schedule and events.`
    }
  ])
  return(
    <div className="projects">
      <div className='flex-row project-container'>
        {projects.map((project, i) => (
          <div className='repoText card'>
            <img
            src={require(`../../assets/projects/${project.name}.png`)}
            alt={`${project.name} screenshot.`}
            className="img-thumbnail mx-1 project-image card-img-top"
            key={project.name}
            />
            <div class="card-body">
              <h5 className='card-title'>{project.name}</h5>
              <p>{project.desc}</p>
              <a className='githubText' href={`${project.github}`}>View Repo</a>
              <a className='liveText' href={`${project.liveUrl}`}>View Live App</a>
            </div>

            

          </div>
          
        ))}
      </div>

    </div>
  )
}

export default Portfolio;