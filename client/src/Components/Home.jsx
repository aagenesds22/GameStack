import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {queryContent, querySearchContent, filterAlpha, showGameById} from '../actions/actions';
import {Link} from 'react-router-dom';
import styled from 'styled-components';



const MainBck = styled.div`
display: flex;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 25, 0.8);




    .link{
        text-decoration: none;
        width: min-content;
        margin: 0 auto;
    }
    .container {
        width: 17vw;
        height: 19vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: 0 auto;
        background-color: rgb(255, 255, 255, 0.6);
    
}
    h1{
        
        
        bottom: -100px;
        margin: 0 auto;
        width: min-content;
        animation: move 1.2s linear forwards;
        opacity: 0;
    }
    .hoverButton {
        width: min-content;
    }
    .hoverButton:hover {
        display: block;
        transform: perspective(100px) translateZ(2.5em);
        transition-duration: 0.2s;
    }
    h1:hover {
        
        transform: perspective(500px) translateZ(1em);
        transition-duration: 0.2s;
        
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
*/
   /*  useEffect(() => {
        props.isEmpty && props.queryContent();
        return;
    }, [])  */

    return (
        <MainBck>
            <div className="container">
            <h1>Home</h1>
            <Link to='/home' className="link">
              <span className="hoverButton">Videogames</span>
            </Link>
            </div>
        </MainBck>
    
    )
}


const mapStateToProps = (state) => {

    return {
           videogames: state.videogames,
           searchQuery: state.searchVideogames,
           orderedVideogames: state.orderedVideogames,
           filtered: state.filtered,
           isEmpty: state.isEmpty,
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({queryContent, querySearchContent, filterAlpha, showGameById}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);