import { useState } from 'react';

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    handleSearch(searchTerm);
    setSearchTerm('');
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
          <button onClick={handleClick}>Search</button>
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
