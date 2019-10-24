import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MoviePage from './components/MoviePage/MoviePage';
import MovieSummary from './components/MovieSummary/MovieSummary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  async componentDidMount() {
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=7f077937236d1ffe1a9deeb64a9d2a38');
    this.setState({ movies: response.data.results });    
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              {this.state.movies.map(movie => <MovieSummary key={movie.id} {...movie} />)}
            </Route>
            <Route path="/movie">
              {this.state.movies.map(movie => <MoviePage key={movie.id} {...movie} />)}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
