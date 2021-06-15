import React from 'react';
import {connect} from 'react-redux';
import {globalState} from '../reducer/reducer';
import {LoadPagination} from '../helpers/helperFunctions';


interface Page {
  page: {
      prev: number;
      next: number;
  };
}

interface Pagination extends Pick<globalState, "filtered" | "videogames" | "orderedVideogames">, Page {
  pageSet: (input:{prev:number; next:number})=> void;
}


function Pagination(props:Partial<Pagination>):JSX.Element {

      return (
                <>
                  {LoadPagination(props, !props.filtered ? props.videogames : props.orderedVideogames)}
                </>
            )
}

const mapStateToProps = (state:Partial<globalState>) => {
  return {
    videogames: state.videogames,
    filtered: state.filtered,
    orderedVideogames: state.orderedVideogames,
  }
}

export default connect(mapStateToProps, null)(Pagination);