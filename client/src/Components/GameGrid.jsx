import React, {useEffect, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';
import {AnimatedCardGame} from '../StyledComponents/AnimatedCardGame';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {queryContent, 
    filterAlpha, 
    filterInverseAlpha, 
    filterIncreaseRating,
    filterDecreasingRating,
    filterGenre,
    getGenres,
    showGameById,
    showGameByIdServer,
    resetFilters} from '../actions/actions';
import {loadStandard} from '../helpers/helperFunctions';



function GameGrid(props) {
    /* console.log(properties);
    
    const {page, pageSet} = properties;
    const {props} = properties.props; */

    
console.log('GameGrid',props);

useEffect(() => {
              
           
    props.isEmpty && props.queryContent();
    props.genres.length < 1 && props.getGenres();
    
    return;
}, [])

    return (
        <div style={{width: '100%', display: 'inherit', flexDirection: 'column', backgroundColor: 'rgb(0,0,25, 0.85)', paddingBottom: '4em'}}>
  
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backdropFilter: 'blur(2px)'}}>
            {loadStandard(props, !props.filtered/* !props.genreFiltered && 
                !props.alphaFiltered && 
                !props.inverseAlphaFiltered && 
                !props.ratingFiltered && 
                !props.ratingDecreasingFiltered */ ? props.videogames : props.orderedVideogames)
            }</div>
            </div>

   )
}

const mapStateToProps = (state) => {
    return {
        videogames: state.videogames,
        orderedVideogames: state.orderedVideogames,
        currentGenre: state.currentGenre,
        genres: state.genres,
        isEmpty: state.isEmpty,
        filtered: state.filtered,
        genreFiltered: state.genreFiltered,
        alphaFiltered: state.alphaFiltered,
        inverseAlphaFiltered: state.inverseAlphaFiltered,
        ratingFiltered: state.ratingFiltered,
        ratingDecreasingFiltered: state.ratingDecreasingFiltered,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({queryContent, 
        showGameById,
        showGameByIdServer,
        filterAlpha, 
        filterInverseAlpha, 
        filterIncreaseRating,
        filterDecreasingRating,
        filterGenre,
        getGenres,
        resetFilters}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameGrid);