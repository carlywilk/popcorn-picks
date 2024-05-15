import './Header.scss';
import Logo from '../../assets/images/logo-movie.png';
import { useState } from 'react';

export function Header({ fetchSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetchSearchResults(searchTerm);
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="header">
      {/* <div className="header__box"> */}
        <img src={Logo} alt="Site Logo" className='header__logo' />
      {/* </div> */}
      <div className="header__box">
        <form onSubmit={handleOnSubmit}>
          <input 
            type="search" 
            className="header__input" 
            placeholder='Find Movie' 
            value={searchTerm} 
            onChange={handleOnChange} 
          />
          <button className="header__button" type="submit">Search</button>
        </form>
      </div>
    </header>
  );
}