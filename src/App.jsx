import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header.jsx';
import { MoviesList } from './components/MoviesList/MoviesList.jsx';
// import { FavouritesList } from './components/FavouritesList/FavouritesList.jsx';

const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = 'a05e7d6beb2f7a3517a89a11bbe7d381';

function App() {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const moviesResponse = await axios.get(`${baseUrl}/movie/top_rated?api_key=${apiKey}`);
        setMovies(moviesResponse.data.results);
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchTopRatedMovies();
  }, []);

  const fetchSearchResults = async (term) => {
    try {
      const moviesResponse = await axios.get(`${baseUrl}/search/movie?api_key=${apiKey}&query=${term}`);
      setMovies(moviesResponse.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header fetchSearchResults={fetchSearchResults} />
      {/* <h1 className='pageTitle'>Pop Corn Picks</h1> */}
      <MoviesList movies={movies}/>
      
    </div>
  );
}

export default App;
