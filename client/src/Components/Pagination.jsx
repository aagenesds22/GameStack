/* import React, { useState } from 'react';
import sectionsArray from './aboutSections.jsx';


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
        <h1>{'pageCount+1'}/3{/*acá debería ir la longitud del array del store*/}</h1>
/*         </div>
        </div>

    );
} */