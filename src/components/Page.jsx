import React, { Component } from "react";
import MoviesPage from "./MoviePage";
import { BrowserRouter, Route } from "react-router-dom";
import NewMovie from "./NewMovie";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={MoviesPage}></Route>
          <Route path="/new/movie" component={NewMovie}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
