import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {AnimatedCardGame} from '../StyledComponents/AnimatedCardGame';




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
                         <h5 style={{
                             margin: '0 auto', 
                             width: '100%', 
                             textAlign: 'center'}}>{elem.name}</h5>
                     </Link>
                 </div>
 
 
 
                     </AnimatedCardGame>
 
 
         ))
       )
                     
                     {/* <div style={{width: 'max-content', height: 'max-content', display: 'inherit', flexWrap: 'inherit', justifyContent: 'space-evenly'}}>
                            <div style={{width: '100%', height: 'min-content', display: 'flex', justifyContent:'flex-end', margin: '0 auto'}}>
                            <select name="filter "onChange={(e)=> {

                                          const objAction = {
                                                 'None': ()=>props.resetFilters(),
                                                 'A-Z': ()=>props.filterAlpha(),
                                                 'Z-A': ()=>props.filterInverseAlpha(),
                                                 'Rating increasing': ()=> props.filterIncreaseRating(e.target.value),
                                                 'Rating decreasing': ()=> props.filterDecreasingRating(e.target.value)
                                          }

                                          objAction[e.target.value]();
                                          return;
                                          
                                          }}>

                            {['None', 'A-Z', 'Z-A', 'Rating increasing', 'Rating decreasing'].map(elem => (
                                   <option value={elem}>{elem}</option>
                            ))}
                            </select>

              </div> */}
                     /* {
                            <div style={{display: 'block', position: 'absolute', display: 'inherit', justifyContent: 'space-around', width: '60%'}}>
                     <button onClick={()=> pageSet(prevPage => {
                            return {

                                   prev: prevPage.prev-15,
                                   next: prevPage.prev,

                     }})} disabled={state.prev < 15}>Prev</button>
                     {[...props.orderedVideogames].slice(0, Math.ceil(props.videogames.length/15)).map((elem,index) => (
                                   <button key={index} onClick={()=> pageSet({
                                          prev: index*15,
                                          next: (index+1)*15
                                   })}>{index+1}</button>
                            ))}
                     <button onClick={()=> pageSet(prevPage => {
                            return {
                                   prev: prevPage.next,
                                   next: prevPage.next+15,
                            }
                     })} disabled={state.next > props.orderedVideogames.length}>Next</button>
                     </div>
                     }
                     </div>
                     
              ) */
             // } else  {
                     //console.log('re-render bad')
                     /* console.log(ref); */
                     /* setTimeout(()=> ref.style.overflowY = 'scroll', 855); */
                     /* return props.videogames.slice(props.page.prev, props.page.next).map((elem,index) =>  (

                            <AnimatedCardGame key={index+1*Math.random()*Math.PI} delayTime={`${0.1+(index/10)}`} >
        
                        <div style={{
                            width: '100%', 
                            height: '100%', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center'}}>
        
                            <Link onClick={(e) => {props.showGameByIdServer(elem)}} to={`/game/${elem.id}`} className='link'>
        
                                <img src={`${elem['background_image']}`}/>
                                <h5 style={{
                                    margin: '0 auto', 
                                    width: '100%', 
                                    textAlign: 'center'}}>{elem.name}</h5>
                            </Link>
                        </div>
        
        
        
                            </AnimatedCardGame>
        
        
                ))
              } */ /* if(props.searched) {

                     return (
                            <div style={{width: '100%', display: 'inherit', flexWrap: 'inherit'}}>
                            {props.searchQuery.slice(state.prev, state.next).map((elem,index) => (
                                   <AnimatedCardGame key={index} delayTime={`${0.1+(index/10)*3.1415}s`}>
                            <div key={index}style={{width: 'min-content', height: 'max-content'}}>
                                   <Link onClick={(e) => {props.showGameById(elem)}} to={`/game/${elem.id}`} >
                                       <div style={{width: '13em', height: '19.5em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                       <img src={`${elem['background_image']}`}/>
                                   <h5 style={{margin: '0 auto'}}>{elem.name}</h5>
                                   </div>
                                   </Link>
                                   
                            </div>
                            </AnimatedCardGame>
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
              }  */
       }


export const loadPagination = (props, arr) => {
       return (<>
       <button 
       onClick={()=> props.pageSet(prevPage => {
             return {
 
                     prev: prevPage.prev-15,
                     next: prevPage.prev,
 
     }})} 
 
       disabled={props.page.prev < 15} style={{display: `${props.page.prev < 15 ? 'none' : 'block'}`}}>
               Prev
     </button>
     {[...arr].slice(0, Math.ceil(arr.length/15)).map((elem,index) => (
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
       disabled={props.page.next > arr.length} style={{display: `${props.page.next > arr.length ? 'none' : 'block'}`}}>
         Next
     </button>
     </>)
}
