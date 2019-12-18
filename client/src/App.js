import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      
      {/* <SavedList list={savedList} />
      <Switch>
        <Route path="/movies/:id" >
          <Movie/>
        </Route>
        <Route path="/" >
          <MovieList/>
        </Route>
      </Switch> */}
      
      <SavedList list={savedList} />
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ Movie } />
      
      {/* <div>Replace this Div with your Routes</div> */}
    </div>
  );
};

export default App;
