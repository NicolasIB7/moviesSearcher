import {ADD_MOVIE_FAVORITE, REMOVE_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL} from "../actions";

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

  function rootReducer(state = initialState, action) {
    if (action.type === ADD_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites: [...state.moviesFavourites,action.payload]
        }
    }
    if (action.type === GET_MOVIES) {
        return {
          ...state,
          moviesLoaded: action.payload.Search  //la api te trae la respuesta en una propiedad llamada search, por eso ponemos .search
        };
    }

    if (action.type === REMOVE_MOVIE_FAVORITE) {
        return {
          ...state,
          moviesFavourites:state.moviesFavourites.filter((movie)=>movie.id!==action.payload)
        };
    }

    if (action.type === GET_MOVIE_DETAIL) {
        return {
          ...state,
          movieDetail: action.payload
        };
    }
    return {...state};
  }
  
  export default rootReducer;