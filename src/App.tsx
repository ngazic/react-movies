import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { getTopMovies } from './store/actions/searchActions';
import { Movies } from "./store/types";
import List from './components/Containers/List'

const App: React.FunctionComponent = () => {
  const [movies, setMovies] = useState<Movies[]>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopMovies());
  }
  )
  return (<div>
    <h1>Welcome to cool new App.</h1>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/movies">
          <h1>Movies</h1>
          <List />
        </Route>
        <Route path="/">
          <h1>Shows</h1>
          <List />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>);
};

export default App;
