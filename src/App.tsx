import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { useDispatch } from "react-redux";
import { getTopMovies, getTopShows } from './store/actions/index';
import List from './components/Containers/List/List';
import Single from "./components/Containers/Single/Single";


const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  dispatch(getTopMovies());
  dispatch(getTopShows());
  return (<div>
    <h1>Welcome to cool new App.</h1>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to='/tv' />
        </Route>
        <Route path="/movie">
          <h1>Movies</h1>
          <List show='movies'/>
        </Route>
        <Route path="/tv">
          <h1>Shows</h1>
          <List show='shows' />
        </Route>
        <Route path="/single">
          <h1>Single</h1>
          <Single />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>);
};

 
 export default App;