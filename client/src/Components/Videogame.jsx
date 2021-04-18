import React, {useLayoutEffect, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {showGameByIdServer, showGameById} from '../actions/actions.js';
import { bindActionCreators } from 'redux';

function getGame(props) {
    return props.videogames.find(elem => 
        elem.id === parseInt(props.match.params.id))
}

const getTheGame = async (props) => {

    props.showGameById(props.match.params.id);
    return (
        <div>
            <h1>{props.idGame.data.id}</h1>
        </div>)

    
}

const loadGameStandard = (props) => {

    let returnBlock;
    return props.idGame.hasOwnProperty('headers') ? returnBlock = (
        <div style={{width: '100%', height: '85vw'}}>
            <h1>{props.idGame.data.name}</h1>
            <div style={{width: '100%', height: '100%'}}>
                
                <img style={{width: '100%', objectFit: 'cover'}} src={`${props.idGame.data['background_image']}`} />
                <h5>{props.idGame.data.description}</h5>
                
            </div>
        </div>
    ) : returnBlock = (
        <div>
            <h1>{props.idGame.name}</h1>
            <h5>{props.idGame.description}</h5>
        </div>
    )

}


/* async function Wrapper(props) {
    
    props.showGameById()
    return (
        <Videogame props={props}/>
    )
}
 */

function Videogame(props) {
    
/* 
    const [game, setGame] = useState(false);

    */

    
    let anythingFound; 
    
    
    useEffect(() => {
              
        props.isGameIdEmpty && props.showGameByIdServer(props.match.params.id);
        return;
  }, []) 

/* useLayoutEffect(() => {

    props.showGameById(props.match.params.id).then(response => {
        setTimeout(() => console.log(response), 2200);
    }, err => console.log(err))
    
}, []); */
 /*    if(props.videogames.length <= 1 && !props.idGame.hasOwnProperty('data')) {
        props.showGameById(props.match.params.id);
        
    }  */

    

    

    return (
        <div style={{width: '40vw', height: 'max-content', margin: '0 auto'}}>

        {loadGameStandard(props)}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        videogames: state.videogames,
        searchQuery: state.searchVideogames,
        idGame: state.idGame,
        isGameIdEmpty: state.isGameIdEmpty,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({showGameByIdServer, showGameById}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Videogame);
