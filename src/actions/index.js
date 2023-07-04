export const ADD_MOVIE_FAVORITE="ADD_MOVIE_FAVORITE"
export const REMOVE_MOVIE_FAVORITE="REMOVE_MOVIE_FAVORITE"
export const GET_MOVIES="GET_MOVIES"
export const GET_MOVIE_DETAIL="GET_MOVIE_DETAIL"

const apikey= "6fd09f9a"


export function addMovieFavorite(id) {
    return { type: ADD_MOVIE_FAVORITE, payload:id };
  }

  export function removeMovieFavorite(id) {
    return { type: REMOVE_MOVIE_FAVORITE, payload:id };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_MOVIES, payload: data }))
    }
  }

  export function getMovieDetail(idMovie) {
    return function(dispatch) {
      fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${idMovie}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_MOVIE_DETAIL, payload: data }))
    }
  }


