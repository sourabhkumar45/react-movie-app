import React, { Component } from "react";
import Pagination from "./Pagination";
import List from "./List";
import Table from "./Table";
import SearchBar from "./SearchBar";

import New from "./New";
import { Link } from "react-router-dom";
// { getMovies } from "../services/fakeMovieService";

class MoviesPage extends Component {
  state = {
    movies: [],
    genres: [{ _id: 1, name: "All Genres" }],
    currSearchText: "",
    limit: 4,
    currentPage: 1,
    cGenre: "All Genres",
  };
  deleteEntry = (id) => {
    let filtereMovies = this.state.movies.filter((movieObj) => {
      return movieObj._id !== id;
    });
    this.setState({
      movies: filtereMovies,
    });
  };
  setCurrentText = (e) => {
    let task = e.target.value;
    // filter
    this.setState({
      currSearchText: task,
    });
  };
  sortByRatings = (e) => {
    let className = e.target.className;
    let sortedMovies;
    let { movies } = this.state;
    if (className === "fas fa-sort-up") {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
      });
    } else {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
      });
    }
    this.setState({
      movies: sortedMovies,
    });
  };
  sortByStock = (e) => {
    let className = e.target.className.trim();
    let sortedMovies;
    let { movies } = this.state;
    if (className === "fas fa-sort-up") {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjA.numberInStock - movieObjB.numberInStock;
      });
    } else {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjB.numberInStock - movieObjA.numberInStock;
      });
    }
    this.setState({
      movies: sortedMovies,
    });
  };
  changelimit = (e) => {
    // console.log("hello");
    let currLimit = e.target.value;
    if (currLimit < 1) return;
    // console.log(currPage);
    this.setState({
      limit: currLimit,
    });
  };
  changeCurrentPage = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };
  sortByGenre = (name) => {
    this.setState({
      cGenre: name,
      currSearchText: "",
    });
  };
  async componentDidMount() {
    // console.log(2);
    let resp = await fetch("https://react-backend101.herokuapp.com/movies");
    let jsonMovies = await resp.json();
    this.setState({
      movies: jsonMovies.movies,
    });
    resp = await fetch("https://react-backend101.herokuapp.com/genres");
    let jsonGenres = await resp.json();
    this.setState({
      genres: [...this.state.genres, ...jsonGenres.genres],
    });
  }
  render() {
    let { movies, currSearchText, limit, currentPage, genres, cGenre } =
      this.state;
    // console.log(movies);
    //   genre
    let filteredArr = movies;
    if (cGenre !== "All Genres") {
      filteredArr = filteredArr.filter((movieObj) => {
        return movieObj.genre.name === cGenre;
      });
    }
    if (currSearchText !== "") {
      filteredArr = filteredArr.filter((movieObj) => {
        let title = movieObj.title.trim().toLowerCase();
        // console.log(title);
        return title.includes(currSearchText.toLowerCase());
      });
    }
    let numberofPage = Math.ceil(filteredArr.length / limit);
    let si = (currentPage - 1) * limit;
    let eidx = si + limit;
    filteredArr = filteredArr.slice(si, eidx);
    return (
      <div className="row m-auto mt-2">
        {/* 12 part */}
        <div className="col-2">
          <List genres={genres} sortByGenre={this.sortByGenre}></List>
        </div>
        <div className="col-9">
          <SearchBar
            setCurrentText={this.setCurrentText}
            currSearchText={this.state.currSearchText}
          ></SearchBar>

          <input
            type="number"
            className="col-1"
            placeholder="no of elements/page"
            value={limit}
            onChange={this.changelimit}
          />
          {/* <input type="text" className="pageNumber"
                      placeholder="page number" /> */}

          <Table
            filteredArr={filteredArr}
            sortByStock={this.sortByStock}
            sortByRatings={this.sortByRatings}
          ></Table>
          <Pagination
            numberofPage={numberofPage}
            currentPage={currentPage}
            changeCurrentPage={this.changeCurrentPage}
          ></Pagination>

          <Link to="/new/movie">
            {" "}
            <New></New>
          </Link>
        </div>
      </div>
    );
  }
}

export default MoviesPage;
