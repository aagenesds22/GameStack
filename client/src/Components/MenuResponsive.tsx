import React, { useEffect, useState } from 'react'
import {ReactComponent as Bars} from '../assets/svg/menu.svg';
import {ReactComponent as CloseBars} from '../assets/svg/close.svg'
import {ResponsiveBar} from '../StyledComponents/MenuBars';
import FilterBar from './FilterBar';
import FilterGenreBar from './FilterGenreBar';
import FilterCreator from './FilterCreator';
import GameGrid from './GameGrid';
import Pagination from './Pagination';

function MenuBars({page, setPage}:{page:{
    prev: number;
    next: number;
}, setPage:(input:{prev:number; next:number})=> void}) {
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


export default MenuBars;