import React, {useState, useEffect} from 'react';
/* import {BarStyled} from '../StyledComponents/FilterBar'; */
import {CreatorBar} from'../StyledComponents/FilterBar';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {filterByCreatorBoth, filterByCreatorApi, filterByCreatorUser} from '../actions/actions';


function FilterCreator(props) {

    const [creator, setCreator] = useState({
                                        createdByUser: false,
                                        createdByServer: false,
                                        createdByBoth: true,
                                    })

    useEffect(() => {

        !props.filtered && setCreator({
                                        createdByUser: false,
                                        createdByServer: false,
                                        createdByBoth: true,
        })

        

    }, [props.filtered])     

    return (
        <CreatorBar>
            <div className="containerButton">
                        <button 
                                className="filterButton"
                                disabled={creator.createdByUser}
                                onClick={()=> {setCreator({
                                                    createdByUser: true,
                                                    createdByServer: false,
                                                    createdByBoth: false,
                                                });
                                                props.filterByCreatorUser();
                                                return;}}>User</button>
            </div>
            <div className="containerButton">
                        <button 
                                className="filterButton" 
                                disabled={creator.createdByServer}
                                onClick={()=> {setCreator({
                                                    createdByUser: false,
                                                    createdByServer: true,
                                                    createdByBoth: false,
                                                });
                                                
                                                props.filterByCreatorApi();
                                                return;}}>
                                                API</button>
            </div >
            <div className="containerButton">
                        <button 
                                className="filterButton"
                                disabled={creator.createdByBoth}
                                onClick={()=> {setCreator({
                                                    createdByUser: false,
                                                    createdByServer: false,
                                                    createdByBoth: true,
                                                });
                                                
                                                props.filterByCreatorBoth();
                                                return;
                                            }}
                                            
                                            >Both</button>
            </div>
        </CreatorBar>
    )
}

const mapStateToProps = (state) => {
    return {
        filtered: state.filtered,
        videogames: state.videogames,
        orderedVideogames: state.orderedVideogames,
    }
}


const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({filterByCreatorBoth, filterByCreatorApi, filterByCreatorUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterCreator);