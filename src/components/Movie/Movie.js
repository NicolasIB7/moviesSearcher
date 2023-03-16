import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import styles from './Movie.module.css';
class Movie extends React.Component {
    
    componentDidMount() {   
        this.props.getMovieDetail(this.props.match.params.id);
      }

    render() {
        return (
            <div className={styles.movieDetail}>
                <h4>{this.props.movieDetail.Title}</h4>
                <p>{this.props.movieDetail.Year}</p>
                <img src={this.props.movieDetail.Poster}></img>
                <p>{this.props.movieDetail.Plot}</p>
              
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail,
    };
  }
  
  function mapDispatchToProps(dispatch) {   //paquete de funciones que hacen dispatch
    return {
      getMovieDetail:(idMovie)=>{dispatch(getMovieDetail(idMovie))}
    };
  }
 
  

export default connect(mapStateToProps,mapDispatchToProps) (Movie);