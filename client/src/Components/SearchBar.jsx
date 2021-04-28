import React, {useState} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {queryContent, querySearchContent, queryResetContent} from '../actions/actions';
import {BarStyled} from '../StyledComponents/FilterBar';






function Searcher(props) {

    const [value, setValue] = useState({
        name: '',
 })

    const handleChange = (e) => {
                                setValue(prevState => {
                                                    return {
                                                            ...prevState,
                                                            [e.target.name]: e.target.value,
                                                        }})
                                                        e.preventDefault();
                                                        }


                    return (
                            <BarStyled>
                            
                                    <form   className="formSearching" 
                                            onSubmit={!props.searched ? (e) => {
                                
                                                                    e.preventDefault();
                        props.querySearchContent(value.name);
                        setValue(prevVal => {
                            return {
                                    ...prevVal,
                                    name: '',
                            }
                        })
                } : (e) => {
                    e.preventDefault();
                    props.queryResetContent();
                    props.queryContent();
                }} >

                <input type="text" name="name" onChange={handleChange} disabled={props.searched} value={value.name} />
                <input type="submit" className="applyButton" disabled={value.name < 1 && !props.searched} value={!props.searched ? 'Search' : 'Reset search'}/>
                </form>
                </BarStyled>
                )
}


const mapStateToProps = (state) => {

    return {
           videogames: state.videogames,
           orderedVideogames: state.orderedVideogames,
           searched: state.searched,
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({queryContent, queryResetContent, querySearchContent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Searcher);