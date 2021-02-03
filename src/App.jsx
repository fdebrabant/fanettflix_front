import React from 'react';
import Carousel from './component/Carousel';
import MovieList from './component/MovieList';

import MovieContextProvider from './contexts/MovieContextProvider';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
      <Carousel />
      <MovieList />
      </MovieContextProvider>
    </div>
  );
}

export default App;
