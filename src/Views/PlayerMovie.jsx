import React, { useEffect, useState,} from 'react';
import axios from 'axios';
import MovieDetails from '../component/MovieDetails';
import VideoPlayer from '../component/VideoPlayer';

export default function PlayerMovie(options) {
    const [movie, setMovie] = useState([]);
    const movieId = options?.match?.params?.id;
    if (!movieId && !Number.isInteger(parseInt(movieId))) {
        // return route 404
    }

    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URL;
        axios
          .get(`${url}api/movies/${movieId}`)
          .then((response) => response.data)
          .then((data) => {
            setMovie(data);
          })
          .catch((err) => {
            let message;
            if (err?.response.status === 500) {
              message = "erreur serveur";
            } else {
              message = err?.response?.data.errorMessage;
            }
            console.log(message);
          });
      }, [movieId]);

      console.log(movie, process.env.REACT_APP_BACKEND_STATIC_URL)
    return (
        <div>
            <VideoPlayer 
                src={`${process.env.REACT_APP_BACKEND_STATIC_URL}${movie.video}`}
                poster={`${process.env.REACT_APP_BACKEND_STATIC_URL}${movie.fullscreen}`} 
            />
            <MovieDetails 
                title={movie.title} 
                year={movie.year} 
                synopsis={movie.synopsis}
                director={movie.director}
            />
        </div>
    );
}
