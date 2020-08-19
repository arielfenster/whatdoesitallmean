import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import PuzzleOne from '../../PuzzleOne/components/PuzzleOne';
import PuzzleTwo from '../../PuzzleTwo/components/PuzzleTwo';
import PuzzleThree from '../../PuzzleThree/components/PuzzleThree';
import CoordinatesPage from '../../CoordinatesPage/components/CoordinatesPage';

const StartPage = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Link to='/one'> <button> One </button></Link>
        <Link to='/two'> <button> Two </button></Link>
        <Link to='/three'> <button> Three </button></Link>
        <Link to='/coordinates'> <button> Coordinates </button></Link>
        <Route path='/one' component={PuzzleOne} />
        <Route path='/two' component={PuzzleTwo} />
        <Route path='/three' component={PuzzleThree} />
        <Route path='/coordinates' component={CoordinatesPage} />
      </BrowserRouter>
    </div>
  );
}

export default StartPage;
