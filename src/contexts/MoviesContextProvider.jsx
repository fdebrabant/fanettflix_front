import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const MoviesContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL;
    axios
      .get(`${url}api/movies`)
      .then((response) => response.data)
      .then((data) => {
        setMovies(data);
        console.log(data);
      })
      .catch((err) => {
        let message;
        if (err.response.status === 500) {
          message = "erreur serveur";
        } else {
          message = err.response.data.errorMessage;
        }
        console.log(message);
      });
  }, []);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

