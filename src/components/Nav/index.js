import React, { useEffect } from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  useEffect(() => {
    document.title = currentCategory.name;
  }, [currentCategory])

  return (
    <header className="flex-row px-1">
      <h1 className="">
        <span>Austin Carter</span>
      </h1>
      <nav>
        <ul className="navitems flex-row list-group list-group-horizontal">
            {categories.map((category) => (
              <li
                className={`mx-1 flex-fill ${
                  currentCategory.name === category.name && `navActive`
                  }`}
                key={category.name}
              >
                <span 
                  onClick={() => {
                    setCurrentCategory(category);
                }}
              >
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