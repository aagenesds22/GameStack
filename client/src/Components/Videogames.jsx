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
import {ReactComponent as SpinnerSVG} from '../assets/svg/Spinner-1.3s-384px.svg';
import {ReactComponent as Bars} from '../assets/svg/menu.svg';
import {ReactComponent as CloseBars} from '../assets/svg/close.svg'
import {ResponsiveBar} from '../StyledComponents/MenuBars';



function MenuBars({page, setPage}) {
       const [deployed, setDeployed] = useState(false);
       return (
              <ResponsiveBar>
                     {!deployed ? 
                     <div className="childContainer" onClick={() => setDeployed(true)}>
                            <span>FILTERS</span>
                            <Bars style={{fill: 'yellow', height: '30px'}}/>
                            
                     </div> : <div className="childContainer" onClick={()=> setDeployed(false)}>
                                   <span>CLOSE FILTERS</span>
                                   <CloseBars style={{height: '25px', width: '40px', fill: 'yellow'}}/>
                                   </div>}
                     {deployed && <div className="filterContainer">
                                          <FilterGenreBar />
                                          <FilterCreator />
                                          <FilterBar />
                                   </div>}
                     <GameGrid page={page}/>
                     <Pagination page={page} pageSet={setPage}/>
              </ResponsiveBar>
       )
}





function VideogamesGrid(props) {

       

       const [page, setPage] = useState({
              prev: 0,
              next: 15,
       })

       const [width, setWidth] = useState(window.innerWidth);

       const testRef = useRef();

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
                     paginationState={page} 
                     paginationComponent={true} 
                     searchBar={true}
                     paginationFunction={(elem)=> setPage(elem)}/>



              {/* <SearchBar /> */}
              {props.isEmpty ? <div style={{height: '100vh'}}><SpinnerSVG style={{backgroundColor: 'transparent', width: '100%'}} /></div> : 
              
              (<div ref={testRef} style={{

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


const mapStateToProps = (state) => {

       return {
              videogames: state.videogames,
              orderedVideogames: state.orderedVideogames,
              genres: state.genres,
              isEmpty: state.isEmpty,
              searched: state.searched,
       }

}

const mapDispatchToProps = (dispatch) => {
       return bindActionCreators({queryContent, getGenres, showGameById}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(VideogamesGrid);
