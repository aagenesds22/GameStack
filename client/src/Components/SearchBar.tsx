import React, {ReactEventHandler, useState} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {queryContent, querySearchContent, queryResetContent} from '../actions/actions';
import {globalState} from '../reducer/reducer';
import {BarStyled} from '../StyledComponents/FilterBar';


interface SearchBar extends Partial<globalState>{
    querySearchContent(arg:string): any;
    queryResetContent(): any;
    queryContent(): any;
}



function Searcher(props:SearchBar):JSX.Element {

    const [value, setValue] = useState({
        name: '',
 })

    const handleChange = (e:React.ChangeEvent<{name:string, value:string}>) => {
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
                <input type="submit" className="applyButton" disabled={value.name.length < 1 && !props.searched} value={!props.searched ? 'Search' : 'Reset search'}/>
                </form>
                </BarStyled>
                )
}


const mapStateToProps = (state:Partial<globalState>) => {

    return {
           videogames: state.videogames,
           orderedVideogames: state.orderedVideogames,
           searched: state.searched,
    }

}

/* const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({queryContent, queryResetContent, querySearchContent}, dispatch)
} */

export default connect(mapStateToProps, {queryContent, queryResetContent, querySearchContent})(Searcher);