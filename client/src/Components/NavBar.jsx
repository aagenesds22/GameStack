import React from 'react';
import {connect} from 'react-redux';
import SearchBar from './SearchBar';
import {NavigationBar, NavigationMenu} from '../StyledComponents/NavBar';
import {Link} from 'react-router-dom';
import {ReactComponent as Stars} from '../assets/svg/star_prototype_Webpage2.svg';
import {StarLogo} from '../StyledComponents/LogoNavBar';
import {ReactComponent as HomeIcon} from '../assets/svg/home-icon-silhouette-svgrepo-com.svg';
import {ReactComponent as AddIcon} from '../assets/svg/plus-sign-svgrepo-com.svg';
/* import {ReactComponent as InfoIcon} from '../info-svgrepo-com.svg' */



function NavBar (props) {

    
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
              <NavigationMenu>
                    <ul style={{display: 'flex', listStyleType:'none', padding: '0', height: 'inherit'}}>
                        <Link to='/home' style={{textDecoration: 'none'}}>
                      
                            <li>
                                <HomeIcon />
                                    <span>
                                            Home
                                    </span>
                            </li>
                        </Link>
                        <Link to='/create_game' style={{textDecoration: 'none'}}>
                            <li>
                                <AddIcon />
                                    <span>
                                        Create game
                                    </span>
                            </li>
                        </Link>
                  

                    </ul>
              </NavigationMenu>
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
        isEmpty: state.isEmpty,
        searched: state.searched,
 }
}



export default connect(mapStateToProps, null)(NavBar);