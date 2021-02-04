import React, { useEffect, useState,} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import MovieList from '../component/MovieList';

export default function MovieGenre(options) {
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    const history = useHistory();

    const genreId = options?.match?.params?.id;
    if (!genreId || !Number.isInteger(parseInt(genreId)) || genreId === 8 ) {
        history.push("/notfound");
    }

    useEffect(() => {
        const url = process.env.REACT_APP_BACKEND_URL;
        axios
          .get(`${url}api/movies/genre/${genreId}`)
          .then((response) => response.data)
          .then((data) => {
            setMoviesByGenre(data);
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
      }, [genreId]);

    

    return (
        <div>
            <MovieList movies={moviesByGenre}/>
        </div>
    )
}
