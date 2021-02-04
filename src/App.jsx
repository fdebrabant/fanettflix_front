import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Title from './component/Title';
import MoviesContextProvider from './contexts/MoviesContextProvider';
import Home from './Views/Home';
import MovieGenre from './Views/MovieGenre';
import NotFound from './Views/NotFound';
import PlayerMovie from './Views/PlayerMovie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Title />
        <Switch>
          <MoviesContextProvider>
            <Route exact path="/" component={ Home } />
            <Route exact path="/movie/:id" component={ PlayerMovie } />
            <Route exact path="/genre/:id" component={ MovieGenre } />
            <Route exact path="/notfound" component={ NotFound } />
          </MoviesContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
