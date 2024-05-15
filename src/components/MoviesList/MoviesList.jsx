import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import Movies from "../Movies/Movies.jsx";

// import { FavouritesList } from "../FavouritesList/FavouritesList.jsx";
import FavouritesAdd from "../FavouritesAdd/FavouritesAdd.jsx";
import FavouritesRemove from "../FavouritesRemove/FavouritesRemove.jsx";

const baseUrl = 'https://api.themoviedb.org/3/movie';
const apiKey = 'a05e7d6beb2f7a3517a89a11bbe7d381';

export function MoviesList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
            const moviesResponse = await axios.get(`${baseUrl}/top_rated?api_key=${apiKey}`);
            setMovies(moviesResponse.data.results);
            console.log(moviesResponse);
            } catch (error) {
            console.log(error);
            }
        };
        fetchMovies();
        }, []);

    return (
        <>
        {movies.map((movie) => (
            <Movies key={movie.id}{...movie} />
        ))}
            {/* <FavouritesAdd /> */}
            {/* <FavouritesRemove /> */}

        </>
    )
}