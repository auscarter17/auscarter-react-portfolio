import React from 'react';

function Nav(props) {
  return (
    <header>
      <h2>
        <span>Austin Carter</span>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;