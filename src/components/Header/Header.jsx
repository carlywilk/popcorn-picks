import './Header.scss';
import Logo from '../../assets/images/logo-movie.png';
import { useState } from 'react';

export function Header({ fetchSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [hidePopularMovies, setHidePopularMovies] = useState(false);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetchSearchResults(searchTerm);
    setHidePopularMovies(true);
  };

  const handleOnChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className="header">
        <img src={Logo} alt="Site Logo" className='header__logo' />
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
        { !hidePopularMovies && <h3 className="movies__popular">Top-Rated Movies</h3>}
      </div>
    </header>
  );
}