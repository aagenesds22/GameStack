import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import {queryContent, 
       filterAlpha, 
       filterInverseAlpha, 
       filterIncreaseRating,
       filterDecreasingRating,
       filterGenre,
       resetFilters,
       getGenres, 
       querySearchContent, 
       showGameById} from '../actions/actions';
import Pagination from './Pagination.jsx';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import GameGrid from './GameGrid';
import NavBar from './NavBar.jsx';



/* Página para hacer el query a los videojuegos y agregar más videojuegos a la DB.

   1. Primero deberá renderizarse la grilla donde estáran inicialmente, una tanda de juegos
   solicitada a la /api/games. Esta grilla deberá, escuchar (actualizarse) a los cambios de un array del store
   de  Redux que ocurrirán a razón de una búsqueda realizada por el usuario, un cambio de filtro, o bien, 
   de género de búsqueda.
            I)
                   a) Montar una función onChange para realizar una búsqueda AUTOMÁTICA
                   una vez que el usuario haya colocado 3 caracteres en el input (para no buscar tanta cantidad)

                   ó

                   b) Montar un onSubmit para que sólo se actualice el store de Redux y la grilla cuando el usuario 
                   presione Search.

            II) Colocar un dropdown al lado del input que deberá filtrar por: 
                     
                     1) Género && Juegos agregados por el usuario
                     2) Género && Juegos de la API
                     3) Juegos agregados por el usuario
                     4) Juegos 
                     5) Ascendene/Descendente por órden alfabético 
                     6) Ascendente/Descendente por rating

   2. Acá deberá renderizarse el componente <Pagination /> pasándole como props: 
          - Numero total de elementos en el array (los contará como paginas y el máximo es 100)
          - 
*/



/* function RandomHook(pass) {
       const [rendered, setRendered] = useState('');

       setRendered(pass.videogames);

       return {rendered};
}
 */


/* function HookHelper (props, arr) {
       const [state, setState] = useState({
              
              grew: arr.length > 1,
              content: ''
       });


       useEffect(() => {
              
              setState({

                     grew: arr.length > 1,
                     content:loadStandard(arr)
                     
              });
       
       })


       return state;
}
 */

function VideogamesGrid(props) {

       

       const [page, setPage] = useState({
              prev: 0,
              next: 15,
       })

       const testRef = useRef();

        useLayoutEffect(() => {
              
           
              props.isEmpty && props.queryContent();
              props.genres.length < 1 && props.getGenres();
              
              return;
        }, [])
        
        /* useEffect(() => {

              setTimeout(() => {testRef.current.style.overflowY = 'scroll'}, 4000);
              return;
        }, [props.videogames, props.orderedVideogames])
 */
       
       
       
       /* }, []) */

       return (
              <div style={{
                     width: '100vw', 
                     margin: '0 auto'}}>
              
              {/* <button onClick={() => {

                     props.filterGenre
              }}></button> */}

              {/* <input list="genres" autoComplete="off" placeholder="Filter by genre" /> */}
              <NavBar 
                     paginationState={page} 
                     paginationComponent={true} 
                     searchBar={true}
                     paginationFunction={(elem)=> setPage(elem)}/>

              {/* <div>
                     <span>Filter by Genre:</span>
              <select name="genres" onChange={(e)=> props.filterGenre(e.target.value)}>
                     {props.genres.map((elem,index) => (<option key={index} value={elem.name}>
                            {elem.name}
                     </option>))}
              </select>
              </div> */}


              {/* <SearchBar /> */}
              <div ref={testRef} style={{

                     width: '100%', 
                     height: '35em', 
                     display: 'flex', 
                     flexWrap: 'wrap', 
                     justifyContent: 'space-evenly', 
                     margin: '0 auto', 
                     overflowY: 'auto'}} >
                     

                     <GameGrid page={page}/* props={{props}} page={page} pageSet={(elem)=>setPage(elem)} *//>
                     {/* {loadStandard(props, page, setPage)} */}

                     </div>
                     
              </div>
                     
       );
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
       return bindActionCreators({queryContent, getGenres, querySearchContent, filterAlpha, filterInverseAlpha, filterIncreaseRating, filterDecreasingRating, filterGenre, resetFilters, showGameById}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(VideogamesGrid);
