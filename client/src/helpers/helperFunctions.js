import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AnimatedCardGame} from '../StyledComponents/AnimatedCardGame';
import {PaginationLayout} from '../StyledComponents/PaginationLayout';




{/*  */}
export const loadStandard = (props, arr, state, pageSet, ref, nit = 0, stop = 16) => {

       
           /* if(props.genreFiltered || props.alphaFiltered || props.inverseAlphaFiltered || props.ratingFiltered || props.ratingDecreasingFiltered) { */
              console.log('re-render');
              /* setTimeout(()=> ref.style.overflowY = 'scroll', 855); */
              return (
                     [...arr].slice(props.page.prev, props.page.next).map((elem,index) =>  (

                     <AnimatedCardGame key={index+1*Math.random()*Math.PI} >
 
                 <div style={{
                     width: '100%', 
                     height: '100%', 
                     display: 'flex', 
                     flexDirection: 'column', 
                     alignItems: 'center'}}>
 
                     <Link onClick={(e) => {props.showGameByIdServer(elem.id)}} to={`/game/${elem.id}`} className='link'>
 
                         <img src={`${elem['background_image']}`}/>
                         <h5>{elem.name}</h5>
                     </Link>
                 </div>
 
 
 
                     </AnimatedCardGame>
 
 
         ))
       )
       }


export const loadPagination = (props, arr) => {
       return (<PaginationLayout>
                     <button 
                            onClick={()=> props.pageSet(prevPage => {
                                                        return {
                                                               prev: prevPage.prev-15,
                                                               next: prevPage.prev,
                                          }})} 
              
                            disabled={props.page.prev < 15} 
                            style={{
                                   visibility: `${props.page.prev < 15 ? 'hidden' : 'visible'}`}}>
               Prev
     </button>
     {[...arr].slice(0, Math.ceil(arr.length/15)).map((elem,index) => (
     <button className="numbersButton" key={index} onClick={()=> props.pageSet({
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
       disabled={props.page.next > arr.length} style={{visibility: `${props.page.next > arr.length ? 'hidden' : 'visible'}`}}>
         Next
     </button>
     </PaginationLayout>)
}
