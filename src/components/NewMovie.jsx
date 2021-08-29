import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewMovie extends Component {
  obj = { title: "", genre: "", stock: "", rate: "", _id: "" };

  setName = (e) => {
    this.obj.title = e.currentTarget.value;
  };
  setGenre = (e) => {
    this.obj.genre = e.currentTarget.value;
  };
  setStock = (e) => {
    this.obj.stock = e.currentTarget.value;
  };
  submitMovie = () => {
    console.log(this.obj);
  };
  setID = () => {
    this.obj._id = Math.floor(Math.random() * 100000 + 1);
  };
  render() {
    this.setID();
    return (
      <div>
        <form className="col-8 m-auto">
          <div class="form-group mt-5">
            <label for="title">Title</label>
            <input
              type="name"
              className="form-control"
              id="title1"
              placeholder="Enter Movie Name"
              onChange={this.setName}
            />
          </div>
          <div className="form-group mt-5">
            <label htmlFor="stock">Number in stock</label>
            <input
              type="name"
              className="form-control"
              id="genre1"
              placeholder="Number in stock"
              onChange={this.setStock}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="genre">Genre</label>
            <select className="form-control" onChange={this.setGenre}>
              <option>Action</option>
              <option>Comedy</option>
              <option>Triller</option>
            </select>
          </div>
          <div className="form-group mt-5">
            <label htmlFor="rate">Rate</label>
            <input
              type="name"
              className="form-control"
              id="rate1"
              placeholder="Rating"
              onChange={this.setRate}
            />
          </div>
          <Link to="/">
            <button
              className="btn btn-primary mt-5"
              onClick={() => {
                this.submitMovie();
              }}
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    );
  }
}
