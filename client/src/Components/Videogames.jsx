import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import {queryContent, filterAlpha, filterInverseAlpha, filterGenre, getGenres, querySearchContent, showGameById} from '../actions/actions';
import Pagination from './Pagination.jsx';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';



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

const AnimatedCardGame = styled.div`
    position: relative;
    display: inherit;
    flex-wrap: inherit;
    bottom: -100px;
    height: max-content;
    width: min-content;
    animation: appear 2.5s linear forwards;


    @keyframes appear {
           0% {bottom: -100px;}
           100% {bottom: 0;}
    }
`


{/*  */}
const loadStandard = (props, state, pageSet, init = 0, stop = 16) => {


           if(props.alphaFiltered && !props.searched) {
              return (
                     
                     <div style={{width: 'max-content', height: '100%', display: 'inherit', flexWrap: 'inherit'}}>
                            <div style={{width: '100%', height: 'min-content', display: 'flex', justifyContent:'flex-end'}}>
                            <button onClick={() => {
                     
                     props.filterAlpha();
                     /* !props.filtered && setState([...props.videogames]) */
                     console.log('test');
                     
              }}>{!props.alphaFiltered ? 'A-Z' : 'Remove Filters'}</button>
              <button onClick={() => {

                     props.filterInverseAlpha();
                     console.log('testInverse');
              }}>{!props.inverseAlphaFiltered ? 'Z-A' : 'Remove Filters'}</button>
              </div>
                     {props.orderedVideogames.slice(state.prev, state.next).map((elem,index) => (
              
              <AnimatedCardGame key={index}>
                     <div key={index}style={{width: 'min-content', height: 'max-content'}}>
                            <div style={{width: '13em', height: '19.5em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Link onClick={(e) => {props.showGameById(elem)}} to={`/game/${elem.id}`} >
                                
                                <img style={{position: 'relative', width: '16.2em', objectFit: 'cover', objectPosition:' 20% 10%',height: '16.5em', transform: 'scale(0.8, 0.75)'}} src={`${elem['background_image']}`}/>
                            <h5 style={{margin: '0 auto', width: 'max-content'}}>{elem.name}</h5>
                            </Link>
                            </div>
                            </div>
                            
                            
                     </AnimatedCardGame>
                     
                     
                     ))}{
                            <div style={{display: 'block', position: 'absolute'}}>
                     <button onClick={()=> pageSet(prevPage => {
                            return {

                                   prev: prevPage.prev-15,
                                   next: prevPage.prev,

                     }})} disabled={state.prev < 15}>Prev</button>
                     <button onClick={()=> pageSet(prevPage => {
                            return {
                                   prev: prevPage.next,
                                   next: prevPage.next+15,
                            }
                     })} disabled={state.next > props.orderedVideogames.length}>Next</button>
                     </div>
                     }
                     </div>
                     
              )
              } if(!props.alphaFiltered && !props.searched)  {
                     return (
                            <div style={{width: '100%', height: '100vw', display: 'inherit', flexWrap: 'inherit'}}>
                                   <div style={{width: '100%', height: 'min-content', display: 'flex', justifyContent:'flex-end'}}>
                                   <button onClick={() => {
                     
                     props.filterAlpha();
                     /* !props.filtered && setState([...props.videogames]) */
                     console.log('test');
                     
              }}>{!props.alphaFiltered ? 'A-Z' : 'Remove Filters'}</button>
              <button onClick={() => {

                     props.filterInverseAlpha();
                     console.log('testInverse');
              }}>{!props.inverseAlphaFiltered ? 'Z-A' : 'Remove Filters'}</button>
              </div>
                            {props.videogames.slice(state.prev, state.next).map((elem,index) => (
                     
                            <div key={index}style={{width: 'min-content', height: 'min-content'}}>
                                   
                                       <div style={{width: '13em', height: '19.5em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                       <Link onClick={(e) => {props.showGameById(elem)}} to={`/game/${elem.id}`} >
                                       <img style={{position: 'relative', width: '15em', objectFit: 'cover',height: '42.2vh', transform: 'scale(0.8, 0.75)'}} src={`${elem['background_image']}`}/>
                                   <h5 style={{margin: '0 auto'}}>{elem.name}</h5>
                                   </Link>
                                   </div>
                                   
                                   
                            </div>
                            
                            )
                            )}{
                                   <div style={{display: 'flex', position: 'relative'}}>
                            <button style={{height: 'min-content'}} onClick={()=> pageSet(prevPage => {
                                   return {
       
                                          prev: prevPage.prev-15,
                                          next: prevPage.prev,
       
                            }})} disabled={state.prev < 15}>Prev</button>
                            <button style={{height: 'min-content'}} onClick={()=> pageSet(prevPage => {
                                   return {
                                          prev: prevPage.next,
                                          next: prevPage.next+15,
                                   }
                            })} disabled={state.next > props.videogames.length}>Next</button>
                            </div>
                            }
                            
                            </div>
                            )
              } if(props.searched) {
                     return (
                            <div style={{width: '100%', display: 'inherit', flexWrap: 'inherit'}}>
                            {props.searchQuery.slice(state.prev, state.next).map((elem,index) => (
                     
                            <div key={index}style={{width: 'min-content', height: 'max-content'}}>
                                   <Link onClick={(e) => {props.showGameById(elem)}} to={`/game/${elem.id}`} >
                                       <div style={{width: '13em', height: '19.5em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                       <img style={{position: 'relative', width: '16.2em', objectFit: 'cover', objectPosition:' 20% 10%',height: '100%', transform: 'scale(0.8, 0.75)'}} src={`${elem['background_image']}`}/>
                                   <h5 style={{margin: '0 auto'}}>{elem.name}</h5>
                                   </div>
                                   </Link>
                                   
                            </div>
                            
                            )
                            )}{
                                   <div style={{display: 'block', position: 'absolute'}}>
                            <button style={{height: 'min-content'}} onClick={()=> pageSet(prevPage => {
                                   return {
       
                                          prev: prevPage.prev-15,
                                          next: prevPage.prev,
       
                            }})} disabled={state.prev < 15}>Prev</button>
                            <button style={{height: 'min-content'}} onClick={()=> pageSet(prevPage => {
                                   return {
                                          prev: prevPage.next,
                                          next: prevPage.next+15,
                                   }
                            })} disabled={state.next > props.searchQuery.length}>Next</button>
                            </div>
                            }
                            
                            </div>
                            )
              }
       }


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

       const [value, setValue] = useState({
              name: '',
       })

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

       const handleChange = (e) => {

              e.preventDefault();
              setValue(prevState => {


                     return {

                          ...prevState,
                          [e.target.name]: e.target.value,
                     }
              })
       }
       
       
       /* }, []) */

       return (
              <div style={{width: '100vw', margin: '0 auto'}}>
                     <button onClick={() => 
                     props.queryContent()
                     
                     
              }>Click</button>


              
              {/* <button onClick={() => {

                     props.filterGenre
              }}></button> */}

              {/* <input list="genres" autoComplete="off" placeholder="Filter by genre" /> */}
              <div>
                     <span>Filter by Genre:</span>
              <select name="genres" onChange={(e)=> filterGenre(e.target.value)}>
                     {props.genres.map((elem,index) => (<option key={index} value={elem.name}>
                            {elem.name}
                     </option>))}
              </select>
              </div>


              <form onSubmit={(e) => {
                     
                     e.preventDefault();
                     props.querySearchContent(value.name);
                     setValue(prevVal => {
                            return {
                                   ...prevVal,
                                   name: '',
                            }
                     })
              }}>
              <input type="text" name="name" onChange={handleChange} disabled={props.searched} value={value.name} />
              <input type="submit" disabled={value.name < 1 && !props.searched} value={!props.searched ? 'Search' : 'Reset search'}/>
              </form>
              <div style={{width: '70%', height: '100vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '0 auto'}} >
                     
                     {loadStandard(props, page, setPage)}
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
              isEmpty: state.isEmpty,
              searched: state.searched,
       }

}

const mapDispatchToProps = (dispatch) => {
       return bindActionCreators({queryContent, getGenres, querySearchContent, filterAlpha, filterInverseAlpha, filterGenre, showGameById}, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(VideogamesGrid);
