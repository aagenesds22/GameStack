import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {resetFilters, 
    filterAlpha, 
    filterInverseAlpha, 
    filterDecreasingRating, 
    filterIncreaseRating, 
    filterGenre} from '../actions/actions';
import {BarStyled} from '../StyledComponents/FilterBar';


function FilterBar (props) {

    const [dropSelect, setDropSelect] = useState("A-Z")

    return (
        <BarStyled>
            <span>
                Order BY
            </span>
            <form className="formOrdering"
                onSubmit={(e) => {
                    e.preventDefault();

                    const objAction = {

                        'A-Z': ()=>props.filterAlpha(),
                        'Z-A': ()=>props.filterInverseAlpha(),
                        'Rating increasing': ()=> props.filterIncreaseRating(e.target.value),
                        'Rating decreasing': ()=> props.filterDecreasingRating(e.target.value)
                    }
             
                        objAction[dropSelect]();
                        return;

            }}>

                <select 
                    name="filter"
                    className="deployable"
                    onChange={(e)=> {
                        setDropSelect(e.target.value);
                        return;
                    }}>

                            {   ['A-Z', 
                                'Z-A', 
                                'Rating increasing', 
                                'Rating decreasing'].map(elem => (

                                                <option value={elem}>{elem}</option>

                            ))}
                </select>
                <input type="submit" className="applyButton" value="APPLY"/>
            </form>
        </BarStyled>
    )
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({filterAlpha, resetFilters, filterDecreasingRating,filterIncreaseRating,filterGenre, filterInverseAlpha}, dispatch)
}

export default connect(null, mapDispatchToProps)(FilterBar);