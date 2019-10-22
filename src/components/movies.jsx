import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";
import { getGenres } from "./fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./pagination";
import { paginate } from "../units/paginate";
import Listgroups from "./listgroup";
import { Link } from "react-router-dom";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    currentGenr: "all"
  };

  // to get the func without get timeout error
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genre " }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handelDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handelPageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handelChangeGroup = (genre) => {
    this.setState({ selectedGenr: genre, currentPage: 1 });
    console.log(genre);
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenr
    } = this.state;
    const filtered =
      selectedGenr && selectedGenr._id
        ? allMovies.filter((m) => m.genre._id === selectedGenr._id)
        : allMovies;

    const movies = paginate(filtered, pageSize, currentPage);

    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Listgroups
              items={this.state.genres}
              selectedGenr={this.state.selectedGenr}
              onPageList={this.handelChangeGroup}
            />
          </div>

          <div className="col">
            <Link to="/movies/new" className="btn btn-primary">
              New Movie
            </Link>
            <p>Showing {filtered.length} movies in the database.</p>

            <MoviesTable movies={movies} onDelete={this.handelDelete} />

            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handelPageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
