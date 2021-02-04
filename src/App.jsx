import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Title from './component/Title';
import MoviesContextProvider from './contexts/MoviesContextProvider';
import Home from './Views/Home';
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
            {/* TODO default route 404 */}
          </MoviesContextProvider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
