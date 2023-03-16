import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { getMovies, addMovieFavorite } from "../../actions";
import styles from './Buscador.module.css'

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  handleClick(movie){
    this.props.addMovieFavorite(movie);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <form className={styles["form-container"]} onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className={styles.label} htmlFor="title"></label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              placeholder="Search your movie"
              className={styles.input} // Usamos la clase CSS "input" del archivo Buscador.module.css
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className={styles.button}>SEARCH</button>
        </form>
        <ul className={styles.movielist}>
         {this.props.movies.map((movie)=>{
          return (
            <li className={styles.movieitem}>
              <Link to={`/movie/${movie.imdbID}`}>
                <span>{movie.Title}</span>
              </Link>
              <button onClick={() => this.handleClick({Title: movie.Title, id: movie.imdbID})}>Favoritos</button>
            </li>
          )
         })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {   //paquete de funciones que hacen dispatch
  return {
    getMovies: (title)=> {dispatch(getMovies(title))},
    addMovieFavorite: (id) => {dispatch(addMovieFavorite(id))},
  };
}




export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
