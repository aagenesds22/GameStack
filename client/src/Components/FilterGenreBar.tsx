import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {filterGenre, resetFilters} from '../actions/actions';
import {BarStyled} from '../StyledComponents/FilterBar';
import {Game, globalState} from '../reducer/reducer';

interface FilterGenre extends Pick<globalState, "genres"> {
    
    filterGenre: (genre:string)=>void;
    resetFilters:(input:string)=>void;
    
}

function FilterGenreBar (props:FilterGenre) {

    const [selectedGenre, setSelectedGenre] = useState("None");
    
    return (<BarStyled>
                <span>Filter by:</span>
        <form 
            className="formOrdering"
            onSubmit={(e) => {
                        e.preventDefault();
                        selectedGenre !== 'None' ? props.filterGenre(selectedGenre) :
                                                      props.resetFilters('reset');
                        return;
            }}>
         <select 
                name="genres" 
                
                className="deployable"
                onChange={(e)=> setSelectedGenre(e.target.value)}>
                    
                        {['None',...props.genres].map((elem,index) => !elem.hasOwnProperty('name') ? (
                
                         <option 
                                key={index} 
                                value={typeof elem === 'string' ? elem : ''} >

                                {elem}
                </option>) : 
                
                (<option 
                key={index} 
                value={typeof elem === 'object' ? elem.name : ''}>

                    {typeof elem === 'object' ? elem.name : ''}

                </option>))}
         </select>
         <input className="applyButton" type="submit" value="APPLY" />
         </form>
         </BarStyled>)
}


const mapStateToProps = (state:Pick<globalState, "genres">) => {
    return {
        genres: state.genres,
    }
}



export default connect(mapStateToProps, {filterGenre, resetFilters})(FilterGenreBar);