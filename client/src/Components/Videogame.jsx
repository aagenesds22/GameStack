import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {showGameByIdServer, showGameById} from '../actions/actions';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar';
import {VideogameDetail} from '../StyledComponents/VideogameDetail';
import {Footer} from '../StyledComponents/Footer';
import LoadGameStandard from './GameDetailRender';


function Videogame(props) {
    

    useEffect(() => {
              
        props.isGameIdEmpty && props.showGameByIdServer(props.match.params.id);

        return null;
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
