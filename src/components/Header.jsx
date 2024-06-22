import { useState } from 'react';
import useFetchRecipes from '../hooks/useFetchRecipes';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [fetchRecipes] = useFetchRecipes();

  const handleSearch = () => {
    if (searchTerm) {
      fetchRecipes(searchTerm);
    }
  };
  return (
    <header className="main_header">
      <div className="text-containe">
        <h1 className="header-title">
          Look for <span>Banger</span> Food
        </h1>
        <p className="header-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          minima impedit eaque voluptate cumque placeat eligendi voluptates
          minus ex perferendis?
        </p>
        <div className="header-input-container">
          <input
            type="text"
            placeholder="Find a recipe..."
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div>
        <img
          src="https://www.bhg.com.au/media/30852/iced-cake.jpg"
          alt=""
          className="main_img"
        />
      </div>
    </header>
  );
}

export default Header;
