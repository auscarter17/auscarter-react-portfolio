import React from 'react';

function Nav(props) {
  const categories = [
    {
      name: "portfolio",
      description:
        "Projects I've worked on."
    },
    {
      name: "resume",
      decription: 
        "My resume and a list of technologies used."
    }
  ]

  function categorySelected(name) {
    console.log(`${name} selected.`)
  }

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
          <li>
            <span>Contact</span>
          </li>
            {categories.map((category) => (
              <li
                className="mx-1"
                key={category.name}
              >
                <span onClick={() => categorySelected(category.name)}>
                  {category.name}
                </span>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;