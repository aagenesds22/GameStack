import axios from 'axios';


const QUERY_CONTENT = 'QUERY_CONTENT', 
QUERY_SEARCH = 'QUERY_SEARCH',
FILTER_ALPHA = 'FILTER_ALPHA',
GET_GENRES = 'GET_GENRES',
FILTER_INVERSE_ALPHA = 'FILTER_INVERSE_ALPHA',
FILTER_GENRE = 'FILTER_GENRE',
FILTER_DATABASE = 'FILTER_DATABASE',
FILTER_RATING = 'FILTER_RATING',
RESET_FILTERS = 'RESET_FILTERS',
FILTER_DECREASING_RATING = 'FILTER_DECREASING_RATING',
SHOW_GAME_BY_ID_SERVER = 'SHOW_GAME_BY_ID_SERVER',
SHOW_GAME_BY_ID = "SHOW_GAME_BY_ID";

/* filter options in queryContent [?] */

export const queryContent = () => {
    return function(dispatch) {
        return axios.get("http://localhost:3001/videogames")
          .then(response => {
            dispatch({ type: "QUERY_CONTENT", payload: response });
          });
      };
    
    
    /*  {

        type: 'QUERY_CONTENT',
        payload: axios.get('http://localhost:3001/videogames').then(response => 
            response */
        
        /* fetch('localhost:3000/videogames').then(response => {
            return response.json()
        }).catch(err => `Unable to reach API\n ${err}`) */
    
}

export const getGenres = () => {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/genre`).then(response => {

            dispatch({type: "GET_GENRES", payload: response})
        })
        
        
    }
}

export const querySearchContent = (input) => {
    return function (dispatch) {
    return !input ? dispatch({type: "QUERY_SEARCH", payload: 'reset'}) : axios.get(`http://localhost:3001/videogames?name=${input}`)
    .then(response => {
        dispatch({type: "QUERY_SEARCH", payload: response})
    });
}
}

export const showGameByIdServer = (input) => {
    return function (dispatch) {
        return !input ? dispatch({type: "SHOW_GAME_BY_ID_SERVER", payload: 'reset'}) : axios.get(`http://localhost:3001/videogame/${input}`)
        .then(response => {
            dispatch({type: "SHOW_GAME_BY_ID_SERVER", payload: response})
        }, err => {dispatch({type:"SHOW_GAME_BY_ID_SERVER", payload: "Not Found"})})
    }
}

export const showGameById = (input) => {
    return {
        type: 'SHOW_GAME_BY_ID',
        payload: input,
    }
}

export const filterAlpha = () => {
    return {
        type: 'FILTER_ALPHA',
    }
}

export const filterInverseAlpha = () => {
    return {
        type: 'FILTER_INVERSE_ALPHA',
    }
}

export const filterIncreaseRating = () => {
    return {
        type: 'FILTER_RATING',
    }
}

export const filterDecreasingRating = () => {
    return {
        type: 'FILTER_DECREASING_RATING',
    }
}

export const resetFilters = (input) => {
    return {
        type: 'RESET_FILTERS',
        payload: input,
    }
}

export const filterGenre = (input) => {
    console.log('test');
    return {
        type: 'FILTER_GENRE',
        payload: input,
    }
}

export const filterDatabase = () => {
    return {
        type: 'FILTER_DATABASE'
    }
}

/* 
export function getMovies(title) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + title)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function getMovieDetail(id){
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + id)
        .then(response => response.json())
        .then(json => { */

export {QUERY_CONTENT, SHOW_GAME_BY_ID, SHOW_GAME_BY_ID_SERVER, GET_GENRES,
        QUERY_SEARCH, FILTER_ALPHA, FILTER_INVERSE_ALPHA, FILTER_RATING,
        RESET_FILTERS, FILTER_DECREASING_RATING, FILTER_GENRE, FILTER_DATABASE};