import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {showGameByIdServer, showGameById} from '../actions/actions';
import { bindActionCreators, Dispatch } from 'redux';
import NavBar from './NavBar';
import { RouteComponentProps } from 'react-router';
import {VideogameDetail} from '../StyledComponents/VideogameDetail';
import {Footer} from '../StyledComponents/Footer';
import LoadGame from './GameDetailRender';
import {globalState} from '../reducer/reducer';




interface MatchParams {
    id: string;
}

interface videoGame extends Partial<globalState>, RouteComponentProps<MatchParams> {
    showGameByIdServer(arg:string): any;
    
    
}

function Videogame(props:videoGame):JSX.Element {
    

    useEffect(() => {
              
        props.isGameIdEmpty && props.showGameByIdServer(props.match.params.id);
        return;
        
  }, []) 

    return (
        <VideogameDetail>
            <NavBar />
                <LoadGame />
            <Footer />
        </VideogameDetail>
    )
}



const mapStateToProps = (state:Partial<globalState>) => {
    return {
        videogames: state.videogames,
        idGame: state.idGame,
        isGameIdEmpty: state.isGameIdEmpty,
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return bindActionCreators({showGameByIdServer, showGameById}, dispatch)
} 

export default connect(mapStateToProps, mapDispatchToProps)(Videogame);