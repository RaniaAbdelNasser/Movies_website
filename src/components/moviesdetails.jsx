import React, { Component } from "react";

const MoviesDetails = ({ match, history }) => {
  // handleSave = () => {
  //   // Navigate to /products
  //   this.props.history.replace("/movies");
  // };

  return (
    <div>
      <h1>hello</h1>
      <h1>Movies From- {match.params.id} </h1>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/movies")}>
        Save
      </button>
    </div>
  );
};

export default MoviesDetails;
