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
            {loadStandard(props, !props.genreFiltered && 
                !props.alphaFiltered && 
                !props.inverseAlphaFiltered && 
                !props.ratingFiltered && 
                !props.ratingDecreasingFiltered ? props.videogames : props.orderedVideogames)
            /* loadStandard(props) *//* props.videogames.slice(props.page.prev, props.page.next).map((elem,index) =>  (
                loadStandard(!props.genreFiltered && 
                !props.alphaFiltered && 
                !props.inverseAlphaFiltered && 
                !props.ratingFiltered && 
                !props.ratingDecreasingFiltered ? props.videogames : props.orderedVideogames)
                    <AnimatedCardGame key={index+1*Math.random()*Math.PI} delayTime={`${0.1+(index/10)}`} >

                <div style={{
                    width: '100%', 
                    height: 'min-content', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center'}}>

                    <Link onClick={(e) => {props.showGameById(elem)}} to={`/game/${elem.id}`} >

                        <img src={`${elem['background_image']}`}/>
                        <h5 style={{
                            margin: '0 auto', 
                            width: '100%', 
                            textAlign: 'center'}}>{elem.name}</h5>
                    </Link>
                </div>



                    </AnimatedCardGame>


        )) */}{/* {
        <div style={{display: 'block', position: 'absolute', display: 'inherit', justifyContent: 'space-around', width: '60%'}}>
        <button onClick={()=> pageSet(prevPage => {
        return {

        prev: prevPage.prev-15,
        next: prevPage.prev,

        }})} disabled={page.prev < 15}>Prev</button>
        {[...props.orderedVideogames].slice(0, Math.ceil(props.videogames.length/15)).map((elem,index) => (
        <button key={index} onClick={()=> pageSet({
                prev: index*15,
                next: (index+1)*15
        })}>{index+1}</button>
        ))}
        <button onClick={()=> pageSet(prevPage => {
        return {
        prev: prevPage.next,
        next: prevPage.next+15,
            }
            })} disabled={page.next > props.orderedVideogames.length}>Next</button>
            </div>
        } */}</div>
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