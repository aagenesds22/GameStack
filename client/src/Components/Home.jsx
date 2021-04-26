import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {queryContent, querySearchContent, filterAlpha, showGameById} from '../actions/actions';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as YourSvg }  from '../star_prototype_Webpage2.svg'



const MainBck = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 25, 1);
    animation: backChange 0.6s ease-in-out forwards 2.35s;



    .link{
            text-decoration: none;
            width: min-content;
            margin: 0 auto;
        
    }

    .container {
            width: 100%;
            position: fixed;
            height: 35em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            left: -100px;
            opacity: 0;
            background-color: transparent;
            animation: move 1.2s linear forwards 3s;
    }

    h1 {
        
            backdrop-filter: blur(10px);
            margin: 0 auto;
            width: min-content;
            color: white;
            
            

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

    @keyframes backChange {
        from {background-color: rgb(0,0,25,1);}
        to {background: url("https://wallpaperaccess.com/full/492747.jpg");
            background-size: cover;
            background-position: center;
            }
    }

    @keyframes move {
        0% {
            left: -100px;
        }

        20% {
            left: 5%;
            
        }

        40% {
            left: 10%;
            
        }

        60% {
            left: 40%;
            opacity: 0.3;
        }

        80% {
            left: 50%;
            opacity: 0.7;
        }

        100% {
            
            opacity: 1;
            left: 10%;
            
        }
    }

    
`

const StarDiv = styled.div`
    display: flex;
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    height: max-content;
    width: 90%;
    justify-content: space-between;

    svg {
        height: 960px;
        position: relative;
        top: -1000px;
        
    }
    
    .starOne {
        animation: blink 0.7s forwards ${0.35}s;
        filter: contrast(1.75) brightness(0.1) drop-shadow(2px 2px 14px black);
    }
    
    .starTwo {
        animation: blink 0.9s forwards ${0.9}s;
        filter: contrast(1.75) brightness(0.1) drop-shadow(2px 2px 14px black);
    }
    
    .starThree {
        animation: blink 1.2s forwards ${1.5}s;
        filter: contrast(1.75) brightness(0.1)  drop-shadow(2px 2px 14px black);
    }
    
    @keyframes blink {
        0% {top: -100%; filter: ;}
        15% {
            transform: rotateZ(20deg);
            filter: brightness(0.5);
        }
        40% {
            transform: rotateZ(-19deg);
            top: 0;
            
        }
        50% {
            transform: rotateZ(0deg);
        }
        60% {
            height: 70%;
            width: 70%;
            top: 0;
        }

        70% {
            top: 0;
            height: 80%;
            width: 100%;
            
        }

      
        90% {
            height: 125%;
            width: 100%;
            top: 0;
            filter: blur(1px);
            
        }

        100% {
            height: 100%,
            width: 100%;
            top: 0;
            
            filter: brightness(1.2) blur(0) drop-shadow(2px 2px 15px rgb(255, 0, 0, 0.8));
            
            
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
        <MainBck delayTime={`${Math.random()}`} >
            
            <StarDiv>
            <div>
            <YourSvg className='starOne' style={{height: '35vh', width: '30vw'}} />
            </div>
            <div>
            <YourSvg className='starTwo' style={{height:'35vh',width: '30vw'}} />
            </div>
            <div>
            <YourSvg className='starThree' style={{height:'35vh',width: '30vw'}} />
            </div>
            </StarDiv>
            <div className="container">
            <h1>GameStack Query APP</h1>
            
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