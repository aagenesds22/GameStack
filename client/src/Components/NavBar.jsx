import React, {useRef} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filterGenre, resetFilters, filterAlpha, filterInverseAlpha, filterDecreasingRating, filterIncreaseRating} from '../actions/actions';
import SearchBar from './SearchBar';
import {NavigationBar} from '../StyledComponents/NavBar';
import Pagination from './Pagination';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Stars} from '../star_prototype_Webpage2.svg';
import {StarLogo} from '../StyledComponents/LogoNavBar';



function NavBar (props) {

    console.log('test33', props);
    return (
        <NavigationBar>

          {/* path="/" component={NavBar}}  <--- MOVER PAGINATION Y SEARCH BAR FUERA DE LA NAVBAR */}
              <StarLogo>
        <h3>GameStack</h3>
        <div className="tripleStar">
            <Stars />
            <Stars />
            <Stars />
        </div>

        </StarLogo>
        
              
              {props.searchBar && <SearchBar />}
              <div style={{width: '30%', height: 'min-content', width: '20%'}}>
                  <ul style={{display: 'flex', listStyleType:'none', padding: '0', height: 'inherit'}}>
                  <NavLink to='/home' style={{textDecoration: 'none', color: 'white'}}>
                  <li>
                      Home
                  </li>
                  </NavLink>
                  <NavLink to='/addYourFavorite' style={{textDecoration: 'none'}}>
                      <li>
                          Add your FAV
                      </li>
                  </NavLink>

                  </ul>
              </div>
              {/* <Pagination page={props.paginationState} pageSet={props.paginationFunction}/>
              <SearchBar /> */}
                   
              

        
        </NavigationBar>

    )
}

const mapStateToProps = (state) => {

    return {
        videogames: state.videogames,
        searchQuery: state.searchVideogames,
        orderedVideogames: state.orderedVideogames,
        genres: state.genres,
        inverseAlphaFiltered: state.inverseAlphaFiltered,
        alphaFiltered: state.alphaFiltered,
        genreFiltered: state.genreFiltered,
        ratingFiltered: state.ratingFiltered,
        ratingDecreasingFiltered: state.ratingDecreasingFiltered,
        isEmpty: state.isEmpty,
        searched: state.searched,
 }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({filterGenre, resetFilters, filterAlpha, filterInverseAlpha, filterIncreaseRating, filterDecreasingRating}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);