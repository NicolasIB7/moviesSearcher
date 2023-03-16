import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import styles from "./Favorites.module.css"
import {removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {

  handleClick(movieId){
    this.props.removeMovieFavorite(movieId)
  }

  render() {
    return (
      <div>
        <h2 style={{marginLeft:"50%", color:"white"}}>Favourites movies</h2>
        <ul className={styles.movielist}>
          {this.props.movies.map((movie)=>{
            return(
              <li className={styles.movieitem}>
                <Link to={`/movie/${movie.imdbID}`}>
                <span>{movie.Title}</span>
                </Link>
                <button onClick={() => this.handleClick(movie.id)}>Eliminar</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {   //paquete de funciones que hacen dispatch
  return {
    removeMovieFavorite: (id) => {dispatch(removeMovieFavorite(id))
  }};
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);
