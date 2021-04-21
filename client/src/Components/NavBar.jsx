import React, {useRef} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {filterGenre} from '../actions/actions';
import SearchBar from './SearchBar';
import {NavigationBar} from '../StyledComponents/NavBar';
import Pagination from './Pagination';
import {NavLink} from 'react-router-dom';

function NavBar (props) {

    console.log('test33', props);
    return (
        <NavigationBar>

         <div style={{
             width: 'max-content',
             height: 'min-content'
         }}>
                     <span>Filter by Genre:</span>
              <select name="genres" onChange={(e)=> props.filterGenre(e.target.value)}>
                     {['None',...props.genres].map((elem,index) => !elem.name ? (
                     
                     <option 
                     key={index} 
                     value={elem} 
                     selected={!props.genreFiltered && "selected"}>

                         {elem}
                     </option>) : 
                     
                     (<option 
                     key={index} 
                     value={elem.name}>

                            {elem.name}

                     </option>))}
              </select>
              </div>
              {props.paginationComponent && <Pagination page={props.paginationState} pageSet={props.paginationFunction}/>}
              {props.searchBar && <SearchBar />}
              <div style={{width: '30%', height: 'min-content'}}>
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
    return bindActionCreators({filterGenre}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);