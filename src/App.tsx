import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from './store';

const App: React.FunctionComponent = () => {
  return (<div>
    <Provider store={store} >
      <h1>Welcome to cool new App.</h1>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/movies">
            <h1>Movies</h1>
          </Route>
          <Route path="/shows">
            <h1>Shows</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>);
};

export default App;
