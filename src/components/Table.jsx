import React, { Component } from "react";

export default class Table extends Component {
  render() {
    let { filteredArr, sortByRatings, sortByStock } = this.props;
    return (
      <table className="table m-auto">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">
              <i className="fas fa-sort-up" onClick={sortByStock}></i>
              Stock
              <i className="fas fa-sort-down" onClick={sortByStock}></i>
            </th>
            <th scope="col">
              <i className="fas fa-sort-up" onClick={sortByRatings}></i>
              Rate
              <i className="fas fa-sort-down" onClick={sortByRatings}></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredArr.map((movieObj) => {
            return (
              <tr key={movieObj._id}>
                <td> </td>

                <td>{movieObj.title} </td>
                <td>{movieObj.genre.name}</td>
                <td>{movieObj.numberInStock}</td>
                <td>{movieObj.dailyRentalRate}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteEntry(movieObj._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
