import React from 'react';
import ghPhoto from '../../assets/icons/github.png';
import liPhoto from '../../assets/icons/linkedin.png';

function Footer() {
  return (
    <footer className='flex'>
      <a href="https://www.github.com/auscarter17">
        <img className='socialimg' alt="Link to GitHub" src={ghPhoto}></img>
      </a>
      <a href="https://www.linkedin.com/in/austin-carter-129387147/">
        <img className='socialimg' alt="Link to LinkedIn" src={liPhoto}></img>
      </a>
    </footer>
  );
}

export default Footer;