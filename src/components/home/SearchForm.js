import React, { Component } from "react";
import {
  searchMovie,
  fetchMovies,
  setLoading,
} from "../../actions/searchActions";
import { connect } from "react-redux";

export class SearchFrom extends Component {
  handleChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a Movie ,TV series ..
          </h1>
          <form id="SearchForm" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder=" Search movies, TV series ..."
              onChange={this.handleChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovie,
  fetchMovies,
  setLoading,
})(SearchFrom);
