import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from './pages/StartPage/components/StartPage';
import PuzzleOne from './pages/PuzzleOne/components/PuzzleOne';
import PuzzleTwo from './pages/PuzzleTwo/components/PuzzleTwo';
import PuzzleThree from './pages/PuzzleThree/components/PuzzleThree';
import CoordinatesPage from './pages/CoordinatesPage/components/CoordinatesPage';

import './css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={StartPage} />
        <Route path='/one' component={PuzzleOne} />
        <Route path='/two' component={PuzzleTwo} />
        <Route path='/three' component={PuzzleThree} />
        <Route path='/coordinates' component={CoordinatesPage} />
        <StartPage />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);