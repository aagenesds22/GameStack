import React from 'react';
import {PaginationLayout} from '../StyledComponents/PaginationLayout';


export function LoadPagination(props, arr) {
       return (<PaginationLayout>
                     <button 
                            className="prevButton"  
                            onClick={()=> props.pageSet(prevPage => {
                                                        return {
                                                               prev: prevPage.prev-15,
                                                               next: prevPage.prev,
                                          }})} 
              
                            disabled={arr.length < 1 || props.page.prev < 15} 
                            style={{
                                   visibility: `${props.page.prev < 15 ? 'hidden' : 'visible'}`}}>
               PREV
     </button>
     {[...arr].slice(0, Math.ceil(arr.length/15)).map((elem,index) => (
     <button className="numbersButton" key={index} onClick={()=> props.pageSet({
             prev: index*15,
             next: (index+1)*15
     })} disabled={props.page.prev === index*15}>{index+1}</button>
     ))}
     <button
       className="nextButton"  
       onClick={()=> props.pageSet(prevPage => {
             return {
 
                     prev: prevPage.next,
                     next: prevPage.next+15,
         }
         })} 
       disabled={props.page.next > arr.length} style={{visibility: `${props.page.next > arr.length ? 'hidden' : 'visible'}`}}>
         NEXT
     </button>
     </PaginationLayout>)
}
