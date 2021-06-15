import React, {useState, useEffect} from 'react';
/* import {BarStyled} from '../StyledComponents/FilterBar'; */
import {CreatorBar} from'../StyledComponents/FilterBar';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {filterByCreatorBoth, filterByCreatorApi, filterByCreatorUser} from '../actions/actions';
import {Game, globalState} from '../reducer/reducer';


interface FilterCreator extends Pick<globalState, "filtered"> {
        filterByCreatorUser: ()=>void ;
        filterByCreatorApi: ()=>void;
        filterByCreatorBoth: ()=>void;
}

function FilterCreator(props:FilterCreator) {

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

const mapStateToProps = (state:Pick<globalState, "filtered" | "videogames" | "orderedVideogames">) => {
    return {
        filtered: state.filtered,
        videogames: state.videogames,
        orderedVideogames: state.orderedVideogames,
    }
}


export default connect(mapStateToProps, {filterByCreatorBoth, filterByCreatorApi, filterByCreatorUser})(FilterCreator);