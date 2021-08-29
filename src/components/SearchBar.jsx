import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    let { currSearchText, setCurrentText } = this.props;
    return (
      <input type="search" value={currSearchText} onChange={setCurrentText} />
    );
  }
}
