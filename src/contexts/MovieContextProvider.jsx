import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const MovieContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const url = process.env.REACT_APP_BACKEND_URL;
    axios
      .get(`${url}api/movies`)
      .then((response) => response.data)
      .then((data) => {
        setMovie(data);
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
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  );
}

