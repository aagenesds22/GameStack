import React from 'react';
import {connect} from 'react-redux';

import {LoadPagination} from '../helpers/helperFunctions';




function Pagination(props) {


  

return (
        <>
          {LoadPagination(props, !props.filtered ? props.videogames : props.orderedVideogames)}
        </>
    )
}

const mapStateToProps = (state) => {
  return {
    videogames: state.videogames,
    filtered: state.filtered,
    orderedVideogames: state.orderedVideogames,
  }
}

export default connect(mapStateToProps, null)(Pagination);