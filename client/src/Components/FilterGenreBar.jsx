import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterGenre, resetFilters} from '../actions/actions';
import {BarStyled} from '../StyledComponents/FilterBar';


function FilterGenreBar (props) {

    const [selectedGenre, setSelectedGenre] = useState("None");
    return (<BarStyled>
                <span>Filter by:</span>
        <form 
            className="formOrdering"
            onSubmit={(e) => {
                        e.preventDefault();
                        selectedGenre !== 'None' ? props.filterGenre(selectedGenre) :
                                                      props.resetFilters();
                        return;
            }}>
         <select 
                name="genres" 
                
                className="deployable"
                onChange={(e)=> setSelectedGenre(e.target.value)}>
                    
                        {['None',...props.genres].map((elem,index) => !elem.name ? (
                
                         <option 
                                key={index} 
                                value={elem} 
                                selected={!props.genreFiltered && "selected"}>

                                {elem}
                </option>) : 
                
                (<option 
                key={index} 
                value={elem.name}>

                       {elem.name}

                </option>))}
         </select>
         <input className="applyButton" type="submit" value="APPLY" />
         </form>
         </BarStyled>)
}


const mapStateToProps = (state) => {
    return {
        genreFiltered: state.genreFiltered,
        genres: state.genres,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({filterGenre, resetFilters}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterGenreBar);