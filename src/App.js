import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./pages/navbar";
import Customers from "./pages/customers";
import Rentals from "./pages/rentals";
import Movies from "./components/movies";
import NotFound from "./pages/notfound";
import LoginForm from "./pages/loginform";
import RegisterForm from "./pages/registerform";
import MoviesDetails from "./components/moviesdetails";
import "./App.css";
import NewMovieForm from "./pages/newmovie";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            {/* <Route path="/movies/new" component={NewMovieForm} /> */}
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={NewMovieForm} />
            <Route path="/customers" component={Customers} />

            <Route path="/rentals" component={Rentals} />
            <Route path="/movies" component={Movies} />

            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
