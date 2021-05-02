import axios from 'axios';
import {Dispatch} from 'redux';


const QUERY_CONTENT = 'QUERY_CONTENT', 
QUERY_RESET_CONTENT = 'QUERY_RESET_CONTENT',
QUERY_SEARCH = 'QUERY_SEARCH',
FILTER_ALPHA = 'FILTER_ALPHA',
GET_GENRES = 'GET_GENRES',
FILTER_INVERSE_ALPHA = 'FILTER_INVERSE_ALPHA',
FILTER_GENRE = 'FILTER_GENRE',
FILTER_BOTH = 'FILTER_BOTH',
FILTER_USER_CREATOR = 'FILTER_USER_CREATOR',
FILTER_API_CREATOR = 'FILTER_API_CREATOR',
FILTER_RATING = 'FILTER_RATING',
RESET_FILTERS = 'RESET_FILTERS',
FILTER_DECREASING_RATING = 'FILTER_DECREASING_RATING',
SHOW_GAME_BY_ID_SERVER = 'SHOW_GAME_BY_ID_SERVER',
SHOW_GAME_BY_ID = "SHOW_GAME_BY_ID";

/* filter options in queryContent [?] */

export const queryContent = () => {
    return function(dispatch:Dispatch) {
        return axios.get("http://localhost:3001/videogames")
          .then(response => {
            dispatch({ type: QUERY_CONTENT, payload: response });
          });
      };
    
    
}

export const getGenres = () => {
    return function (dispatch:Dispatch) {
        return axios.get(`http://localhost:3001/genre`).then(response => {

            dispatch({type: GET_GENRES, payload: response})
        })
        
        
    }
}

export const querySearchContent = (input:string) => {
    return function (dispatch:Dispatch) {
    return axios.get(`http://localhost:3001/videogames?name=${input}`)
    .then(response => {
        dispatch({type: QUERY_SEARCH, payload: response})
    });
}
}

export const queryResetContent = () => {

    return {
        type: QUERY_RESET_CONTENT,
    }
}

export const showGameByIdServer = (input:string|number) => {
    return function (dispatch:Dispatch) {
        return axios.get(`http://localhost:3001/videogame/${input}`)
        .then(response => {
            dispatch({type: "SHOW_GAME_BY_ID_SERVER", payload: response})
        }, err => {dispatch({type:"SHOW_GAME_BY_ID_SERVER", payload: "Not Found"})})
    }
}

export const showGameById = (input:string|number) => {
    return {
        type: SHOW_GAME_BY_ID,
        payload: input,
    }
}

export const filterAlpha = () => {
    return {
        type: FILTER_ALPHA,
    }
}

export const filterInverseAlpha = () => {
    return {
        type: FILTER_INVERSE_ALPHA,
    }
}

export const filterIncreaseRating = () => {
    return {
        type: FILTER_RATING,
    }
}

export const filterDecreasingRating = () => {
    return {
        type: FILTER_DECREASING_RATING,
    }
}

export const resetFilters = (input:string) => {
    return {
        type: RESET_FILTERS,
        payload: input,
    }
}

export const filterGenre = (input:string) => {
    console.log('test');
    return {
        type: FILTER_GENRE,
        payload: input,
    }
}

export const filterByCreatorBoth = () => {
    return {
        type: FILTER_BOTH
    }
}

export const filterByCreatorUser = () => {
    return {
        type: FILTER_USER_CREATOR
    }
}

export const filterByCreatorApi = () => {
    return {
        type: FILTER_API_CREATOR
    }
}



export {QUERY_CONTENT, QUERY_RESET_CONTENT, SHOW_GAME_BY_ID, SHOW_GAME_BY_ID_SERVER, GET_GENRES,
        QUERY_SEARCH, FILTER_ALPHA, FILTER_INVERSE_ALPHA, FILTER_RATING,RESET_FILTERS,
        FILTER_DECREASING_RATING, FILTER_GENRE, FILTER_BOTH, FILTER_API_CREATOR, FILTER_USER_CREATOR};