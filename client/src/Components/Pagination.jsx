import React, { useState } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {PaginationLayout} from '../StyledComponents/PaginationLayout';
import {loadPagination} from '../helpers/helperFunctions';
/*  import sectionsArray from './aboutSections.jsx';


export default function Any() {

    const [pageCount, setPageCount] = useState(0); */ // <--- dispatch?
    /* 
    
    el Estado debe tomar la longitud del array que está en el store guardando las consultas, cuando se realiza un pedido a la API.
    de esta forma, se puede lograr un buen paginado. debe automatizarse para cualquier longitud
    y el componente debe renderizar automáticamente esta longitud.

    */
  
     /*       {sectionsArray[pageCount]} 
       Los títulos estan guardados en un Array y acá se los va seleccionando sucesivamente ['titulo1', 'titulo2', 'titulo3'] por índice.

       Esto será modificado, y la respuesta de Redux será desde un array de objetos, enviando los datos de la query que realizó el backend 
       a la API.

     */


/*     return (
        <div>
        <div className={Abt.pContainer}>
            {sectionsArray[pageCount]} 
        </div>
        <div>
           <div>
        <button onClick={pageCount < sectionsArray.length-1 ? () => {setPageCount(prevPage => {return prevPage+=1})} : null } id="nextBtn"><span>Siguiente</span></button>
        <button onClick={pageCount > 0 ? () => {setPageCount(prevPage => {return prevPage-=1});
      console.log(pageCount)} : null} id="prevBtn"><span>Previo</span></button>
           </div> */
        {/*acá debería ir la longitud del array del store</h1>*/}
/*         </div>
        </div>

    );
} */

function Pagination(props) {


  
console.log(props);
return (
  <>
    {loadPagination(props, !props.filtered/* !props.genreFiltered && 
                !props.alphaFiltered && 
                !props.inverseAlphaFiltered && 
                !props.ratingFiltered && 
                !props.ratingDecreasingFiltered  */? props.videogames : props.orderedVideogames)}
    {/* <div style={{
      position: 'relative', 
      display: 'inherit',
      height: 'min-content',
      justifyContent: 'space-between', 
      width: '30%',
      top: '50%',
      margin: '0 auto'}}> */}

      
    {/* <button 
      onClick={()=> props.pageSet(prevPage => {
            return {

                    prev: prevPage.prev-15,
                    next: prevPage.prev,

    }})} 

      disabled={props.page.prev < 15}>
              Prev
    </button>
    {[...props.videogames].slice(0, Math.ceil(props.videogames.length/15)).map((elem,index) => (
    <button key={index} onClick={()=> props.pageSet({
            prev: index*15,
            next: (index+1)*15
    })} disabled={props.page.prev == index*15}>{index+1}</button>
    ))}
    <button 
      onClick={()=> props.pageSet(prevPage => {
            return {

                    prev: prevPage.next,
                    next: prevPage.next+15,
        }
        })} 
      disabled={props.page.next > props.videogames.length}>
        Next
    </button> */}
        {/* </div> */}
        </>
    )
}

const mapStateToProps = (state) => {
  return {
    videogames: state.videogames,
    filtered: state.filtered,
    orderedVideogames: state.orderedVideogames,
    genreFiltered: state.genreFiltered,
    alphaFiltered: state.alphaFiltered,
    inverseAlphaFiltered: state.inverseAlphaFiltered,
    ratingFiltered: state.ratingFiltered,
    ratingDecreasingFiltered: state.ratingDecreasingFiltered,
  }
}

export default connect(mapStateToProps, null)(Pagination);