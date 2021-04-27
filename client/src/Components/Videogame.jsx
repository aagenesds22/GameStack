import React, {useLayoutEffect, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {showGameByIdServer, showGameById} from '../actions/actions.js';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar';
import {VideogameDetail} from '../StyledComponents/VideogameDetail';
import {Footer} from '../StyledComponents/Footer';

/* function getGame(props) {
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
 */
const LoadGameStandard = (props) => {

    let returnBlock;
    return props.idGame === 'empty' ? (
                        <div style={{width: '100vw', height: '100vh', backgroundColor: 'black'}}>
                                <h1 style={{margin: '0 auto', color: 'white'}}>Unable to find game ID.</h1>

                        </div>) : 
                        
                        props.idGame.hasOwnProperty('headers') && (
                            <div style={{
                                width: '100%', 
                                height: 'inherit', 
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'white',
                                backgroundColor: 'black'}}>
                                
                                    <div style={{width: '100%', height: '100%', display: 'flex'}}>
                                        <div style={{width: '50%'}}>
                                        <h1>{props.idGame.data.name}</h1>
                                        <img style={{width: '80%', objectFit: 'cover'}} src={`${props.idGame.data['background_image']}`} />
                                    </div>
                                    <div style={{width: '45%'}}>
                                        <h5>{props.idGame.data.description}</h5>
                                    </div>
            </div>
        </div>
    ) 

}


function Videogame(props) {
    

    useEffect(() => {
              
        props.isGameIdEmpty && props.showGameByIdServer(props.match.params.id);

        return ()=>props.showGameByIdServer();
  }, []) 

    return (
        <VideogameDetail>
            <NavBar />
                {LoadGameStandard(props)}
            <Footer />
        </VideogameDetail>
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
