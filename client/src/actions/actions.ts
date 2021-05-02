import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from './types';




export const queryContent = () => {
    return function(dispatch:Dispatch) {
        return axios.get("http://localhost:3001/videogames")
          .then(response => {
            dispatch({ type: ActionTypes.queryContent, payload: response });
          });
      };
    
    
}

export const getGenres = () => {
    return function (dispatch:Dispatch) {
        return axios.get(`http://localhost:3001/genre`).then(response => {

            dispatch({type: ActionTypes.getGenres, payload: response})
        })
        
        
    }
}

export const querySearchContent = (input:string) => {
    return function (dispatch:Dispatch) {
    return axios.get(`http://localhost:3001/videogames?name=${input}`)
    .then(response => {
        dispatch({type: ActionTypes.querySearchContent, payload: response})
    });
}
}

export const queryResetContent = () => {

    return {
        type: ActionTypes.queryResetContent,
    }
}

export const showGameByIdServer = (input:string|number) => {
    return function (dispatch:Dispatch) {
        return axios.get(`http://localhost:3001/videogame/${input}`)
        .then(response => {
            dispatch({type: ActionTypes.showGameByIdServer, payload: response})
        }, err => {dispatch({type:ActionTypes.showGameByIdServer, payload: "Not Found"})})
    }
}

export const showGameById = (input:string|number) => {
    return {
        type: ActionTypes.showGameById,
        payload: input,
    }
}

export const filterAlpha = () => {
    return {
        type: ActionTypes.showGameByIdServer,
    }
}

export const filterInverseAlpha = () => {
    return {
        type: ActionTypes.filterInverseAlpha,
    }
}

export const filterIncreaseRating = () => {
    return {
        type: ActionTypes.filterIncreaseRating,
    }
}

export const filterDecreasingRating = () => {
    return {
        type: ActionTypes.filterDecreasingRating,
    }
}

export const resetFilters = (input:string) => {
    return {
        type: ActionTypes.resetFilters,
        payload: input,
    }
}

export const filterGenre = (input:string) => {
    console.log('test');
    return {
        type: ActionTypes.filterGenre,
        payload: input,
    }
}

export const filterByCreatorBoth = () => {
    return {
        type: ActionTypes.filterByCreatorBoth,
    }
}

export const filterByCreatorUser = () => {
    return {
        type: ActionTypes.filterByCreatorUser,
    }
}

export const filterByCreatorApi = () => {
    return {
        type: ActionTypes.filterByCreatorApi
    }
}



