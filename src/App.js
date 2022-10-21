import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: "about",
      description:
        "About Austin Matthew Carter."
    },
    {
      name: "portfolio",
      description:
        "Projects I've worked on."
    },
    {
      name: "resume",
      decription: 
        "My resume and a list of technologies used."
    },
    {
      name: "contact",
      description: "Ways to contact me."
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const displayCategory = () => {
    if (currentCategory.name === 'about') {
      return <About></About>
    } else if (currentCategory.name === 'portfolio') {
      return <Portfolio></Portfolio>
    } else if (currentCategory.name === 'resume') {
      return <Resume></Resume>
    } else if (currentCategory.name === 'contact') {
      return <Contact></Contact>
    }
  }

  return(
    <div className="main">
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <div>
        <main>
          {displayCategory()}
        </main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App;
