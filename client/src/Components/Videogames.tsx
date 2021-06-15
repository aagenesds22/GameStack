import React, {useState, useEffect, useRef} from 'react';
import {queryContent, 
       getGenres,
       showGameById} from '../actions/actions';
import Pagination from './Pagination';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import GameGrid from './GameGrid';
import NavBar from './NavBar';
import {Footer} from '../StyledComponents/Footer';
import FilterBar from './FilterBar';
import FilterGenreBar from './FilterGenreBar';
import FilterCreator from './FilterCreator';
import MenuBars from './MenuResponsive';
import {ReactComponent as SpinnerSVG} from '../assets/svg/Spinner-1.3s-384px.svg';
import { globalState } from '../reducer/reducer';


interface Grid extends Pick<globalState, "genres" | "isEmpty" | "searched"> {
       queryContent: ()=>void;
       getGenres: ()=>void;
}


function VideogamesGrid(props:Grid) {

       

       const [page, setPage] = useState({
              prev: 0,
              next: 15,
       })

       const [width, setWidth] = useState(window.innerWidth);

        useEffect(() => {
              
           
              props.isEmpty && props.queryContent();
              props.genres.length < 1 && props.getGenres();
              
              return;
        }, [])

        useEffect(() => {
               setPage({
                      prev: 0,
                      next: 15,
               })
        }, [props.searched])

        useEffect(() => {
              window.addEventListener('resize', changeWidth);
        
              return () => window.removeEventListener('resize', changeWidth)
        }, [])

        const changeWidth = () => {
               setWidth(window.innerWidth);
               return;
        }


       return (
              <div style={{
                     width: 'inherit', 
                     margin: '0 auto',
                     height: 'max-content',
                     backgroundColor: 'rgb(0,0,0, 0.9)'}}>
              
              <NavBar 

                     searchBar={true} />
              {/* <SearchBar /> */}
              {props.isEmpty ? <div style={{height: '100vh'}}><SpinnerSVG style={{backgroundColor: 'transparent', width: '100%'}} /></div> : 
              
              (<div style={{

                     width: '100%',
                     minHeight: '100vh', 
                     display: 'flex', 
                     flexWrap: 'wrap', 
                     justifyContent: 'space-evenly', 
                     margin: '0 auto', 
                     overflowY: 'auto',
                     overflowX: 'hidden'}} >

                     
                     {width > 850 ? ( 
                            
                            <div style={{width:'100%', display: 'flex', flexDirection: 'column'}}>
                            
                                   <div style={{
                                   display: 'flex',
                                   alignItems: 'center',
                                   width: '100%',
                                   height: '1.6em',
                                   justifyContent: 'space-around'
                            }}>
                     
                                   <FilterGenreBar />
                                   <FilterCreator />
                                   <FilterBar />
                            </div>
                            {/* ADD SPINNER */}
                     
                            <GameGrid page={page}/>
                            <Pagination page={page} pageSet={setPage}/>
                     </div>) : <MenuBars page={page} setPage={setPage}/>}
                     </div>)}
                     
                     
                     <Footer />
              </div>
                     
       );
}


const mapStateToProps = (state:globalState) => {

       return {
              videogames: state.videogames,
              orderedVideogames: state.orderedVideogames,
              genres: state.genres,
              isEmpty: state.isEmpty,
              searched: state.searched,
       }

}


export default connect(mapStateToProps, {
       queryContent, 
       getGenres, 
       showGameById})(VideogamesGrid);
