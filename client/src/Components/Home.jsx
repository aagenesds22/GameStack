import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {queryContent, querySearchContent, filterAlpha, showGameById} from '../actions/actions';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as YourSvg }  from '../star_prototype_Webpage2.svg'
import {MainPage, StarDiv} from '../StyledComponents/Main';


function Home(props) {


    return (
        <MainPage>
            
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
            <h1>GameStack</h1>
            
            <Link to='/home' className="link">
              <span className="hoverButton">Videogames</span>
              
            </Link>
            </div>
        </MainPage>
    
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