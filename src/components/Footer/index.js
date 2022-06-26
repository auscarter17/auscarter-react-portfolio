import React from 'react';
import ghPhoto from '../../assets/icons/github.png';
import liPhoto from '../../assets/icons/linkedin.png';

function Footer() {
  return (
    <footer className='flex'>
      <img className='socialimg' alt="Link to GitHub" src={ghPhoto}></img>
      <img className='socialimg' alt="Link to LinkedIn" src={liPhoto}></img>
    </footer>
  );
}

export default Footer;