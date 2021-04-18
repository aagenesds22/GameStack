import {QUERY_CONTENT, QUERY_SEARCH, SHOW_GAME_BY_ID, GET_GENRES, SHOW_GAME_BY_ID_SERVER, FILTER_ALPHA, FILTER_INVERSE_ALPHA, FILTER_GENRE} from '../actions/actions';




const initialState = {
    videogames: [],
    orderedVideogames: [],
    searchVideogames: [],
    genres: [],
    idGame: {

    },
    genreFiltered: false, // filtrado por genero?
    searched: false, // buscado por el cliente?
    alphaFiltered: false, // ordenado A-Z?
    inverseAlphaFiltered: false, // ordenado Z-A?
    isEmpty: true, // está vacio videogames: [] ?
    isGameIdEmpty: true, // está vacio el juego seleccionado idGame: {}
};




const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case QUERY_CONTENT:
            return {
                ...state,
                videogames: action.payload.data,
                isEmpty: false,
            };
        case QUERY_SEARCH: 
            return  {
                ...state,
                searchVideogames:action.payload === 'reset' ? [...''] : action.payload.data,
                searched: !state.searched,
                alphaFiltered: state.alphaFiltered ? !state.alphaFiltered : state.alphaFiltered,
            };
        case GET_GENRES: 
        return {
            ...state,
            genres: action.payload.data,
        };
        case SHOW_GAME_BY_ID_SERVER:
            return {
                ...state,
                idGame: action.payload,
                isGameIdEmpty: false,
            };
        case SHOW_GAME_BY_ID:
            return {
                ...state,
                idGame: action.payload,
                isGameIdEmpty: false,
            }
        case FILTER_ALPHA:
            return !state.alphaFiltered && !state.searched ? { // no se ordenó previamente de A-Z
                ...state,
                orderedVideogames: [...state.videogames].sort((a, b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                }),
                alphaFiltered: !state.alphaFiltered,
            } : state.searched && !state.alphaFiltered ? { // se buscó, pero no se ordenó previamente de A-Z
                ...state,
                searchVideogames: [...state.searchVideogames].sort((a,b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                }),
                alphaFiltered: !state.alphaFiltered,
            } : {...state, alphaFiltered: !state.alphaFiltered};
        case FILTER_INVERSE_ALPHA: 
        return {};
        case FILTER_GENRE:

            return !state.alphaFiltered && !state.searched && !state.genreFiltered? { // no hay nada ordenado, no hay nada buscado, ni filtrado
                ...state,
                orderedVideogames: [...state.videogames].map((elem) => {
                    return elem.genres.filter(elem=> elem.name === action.payload);
                }),
                genreFiltered: !state.genreFiltered,
            } : state.searched && !state.alphaFiltered && !state.genreFiltered ? { // hay algo buscado, pero no ordenado
                ...state,
                searchVideogames: [...state.searchVideogames].map((elem) => {
                    return elem.genres.filter(elem => elem.name === action.payload);
                })
            } : state.filtered && state.searched && !state.genreFiltered ? { 
                // hay algo buscado, previamente ordenado pero no por género
            } : {...state, filtered: !state.alphaFiltered};
        default:
            return state;
    }
}

export default rootReducer;