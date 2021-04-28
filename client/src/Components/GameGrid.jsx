import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {AnimatedCardGame} from '../StyledComponents/AnimatedCardGame';
import {ErrorPage} from '../StyledComponents/ErrorPage';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {queryContent, 
    getGenres,
    showGameById,
    showGameByIdServer} from '../actions/actions';







function RenderedGames(props) {


    return props.arr.length >= 1 ? ( 

        [...props.arr].slice(props.page.prev, props.page.next).map((elem,index) =>  (

            <AnimatedCardGame key={index+5/(index*Math.PI)} >

        <div className="container">
            <Link 
                 onClick={(e) => {props.showGameByIdServer(elem.id)}} 
                 to={`/game/${elem.id}`} 
                 className='link'>

                <img src={`${elem['background_image']}`}/>
                <h5>{elem.name}</h5>
            </Link>
        </div>
        <div className="genreDiv">
            <span>Genres:</span> 
                <ul className="genreUnorderedList">{elem.genres.map((elem,index) => (
                    
                    <li key={index+9}>{elem.name}</li>
                

            ))}</ul>
        </div>
            </AnimatedCardGame>

    ))) : <ErrorPage>
                <div className="errorMessage">
                    <img src="https://cdn.pixabay.com/photo/2019/06/08/09/14/high-4259761_1280.png"></img>
                    <h1>The filter you applied or the search you performed did not return any game. Reset the
                        filters or try a different query.
                    </h1>
                </div>
        </ErrorPage>
}




function GameGrid(props) {

    useEffect(() => {
        
        props.isEmpty && props.queryContent();
        props.genres.length < 1 && props.getGenres();
        
        return;
    }, [])
    

    return (
            <div className="mainContainerGrid">
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', backdropFilter: 'blur(2px)'}}>
                    {<RenderedGames 
                            filtered={props.filtered}
                            page={props.page} 
                            showGameByIdServer={(elem)=> props.showGameByIdServer(elem)} 
                            arr={!props.filtered ? props.videogames : props.orderedVideogames} />
                    }
            </div>
        </div>

   )
}

const mapStateToProps = (state) => {
    return {
        videogames: state.videogames,
        genres: state.genres,
        orderedVideogames: state.orderedVideogames,
        isEmpty: state.isEmpty,
        filtered: state.filtered,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({queryContent, 
        showGameById,
        showGameByIdServer,
        getGenres}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GameGrid);