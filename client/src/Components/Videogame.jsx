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
    return props.idGame === 'empty' ? (
<div style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
    <h1 style={{margin: '0 auto', color: 'white'}}>Unable to find game ID.</h1>

</div>


    ) : props.idGame.hasOwnProperty('headers') ? returnBlock = (
        <div style={{width: '100%', height: 'max-content', display: 'flex', flexDirection: 'column'}}>
            <h1>{props.idGame.data.name}</h1>
            <div style={{width: '100%', height: '100%'}}>
                
                <img style={{width: '50%', objectFit: 'cover'}} src={`${props.idGame.data['background_image']}`} />
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
    console.log('re-render1')
    console.log('re-render2')
    
    useEffect(() => {
              
        props.isGameIdEmpty && props.showGameByIdServer(props.match.params.id);
        return ()=>props.showGameByIdServer();
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
        <div style={{width: '70%', height: 'max-content', margin: '0 auto'}}>

        {loadGameStandard(props)}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        videogames: state.videogames,
        idGame: state.idGame,
        isGameIdEmpty: state.isGameIdEmpty,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({showGameByIdServer, showGameById}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Videogame);
