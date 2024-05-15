import './App.css';
import Movies from './components/Movies/Movies.jsx';
import axios from 'axios';
import { Header } from './components/Header/Header.jsx';
import { useEffect, useState } from 'react';
import { MoviesList } from './components/MoviesList/MoviesList.jsx';
import { FavouritesList } from './components/FavouritesList/FavouritesList.jsx';

// const baseUrl = 'https://api.themoviedb.org/3/movie';
// const apiKey = 'a05e7d6beb2f7a3517a89a11bbe7d381';

function App() {
  // const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const moviesResponse = await axios.get(`${baseUrl}/top_rated?api_key=${apiKey}`);
  //       setMovies(moviesResponse.data.results);
  //       console.log(moviesResponse);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchMovies();
  // }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourite-movie", JSON.stringify(items));
  }

  const addFavourite = (movie) => {
    const newFavouritesList = [...favourites, movie];
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  }

  const removeFavourite = (movie) => {
    const newFavouritesList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    )
    setFavourites(newFavouritesList);
    saveToLocalStorage(newFavouritesList);
  }

  return (
    <div>
    <Header />
    <h1 className='pageTitle'>Pop Corn Picks</h1>
    
      {/* {movies.map((movie) => (
        <Movies key={movie.id}{...movie} />
      ))} */}

      <MoviesList
        // movies={movies}
        // setMovies={setMovies}
        handleFavourites={addFavourite}
      />
      <FavouritesList
        favourites={favourites}
        removeFavourites={removeFavourite}
      />

    </div>
  );
}

export default App;
