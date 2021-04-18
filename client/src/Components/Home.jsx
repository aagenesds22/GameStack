import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {queryContent, querySearchContent, filterAlpha, showGameById} from '../actions/actions';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



const MainBck = styled.div`
    
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 25, 0.8);

    h1 {
        position: absolute;
        bottom: -100px;
        margin: 0 auto;
        right: 0;
        left: 0;
        width: min-content;
        animation: move 1.2s linear forwards;
        opacity: 0;
    }

    @keyframes move {
        0% {
            bottom: -100px;
        }

        20% {
            bottom: 20px;
            
        }

        40% {
            bottom: 125px;
            
        }

        60% {
            bottom: 250px;
            opacity: 0.3;
        }

        80% {
            bottom: 370px;
            opacity: 0.7;
        }

        100% {
            bottom: 450px;
            opacity: 1;
        }
    }
`




function Home(props) {


  /*   const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return;
    }, []) */

    return (
        <MainBck>
        
        
            <h1>Home</h1>
            <Link to='/home'>
              <button>Videogames</button>
            </Link>
        </MainBck>
    
    )
}


const mapStateToProps = (state) => {

    return {
           videogames: state.videogames,
           searchQuery: state.searchVideogames,
           orderedVideogames: state.orderedVideogames,
           filtered: state.filtered
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({queryContent, querySearchContent, filterAlpha, showGameById}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);