import React, { useContext } from 'react';
import { MoviesContext } from '../contexts/MoviesContextProvider';
import Carousel from '../component/Carousel';
import MovieList from '../component/MovieList';

export default function Home() {
    const { movies } = useContext(MoviesContext);
    return (
        <div>
            <Carousel />
            <MovieList movies={movies}/>
        </div>
    )
}
