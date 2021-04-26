import {QUERY_CONTENT, 
    QUERY_RESET_CONTENT,
    QUERY_SEARCH, 
    SHOW_GAME_BY_ID, 
    GET_GENRES, 
    SHOW_GAME_BY_ID_SERVER, 
    FILTER_ALPHA, 
    FILTER_INVERSE_ALPHA, 
    FILTER_RATING, 
    FILTER_DECREASING_RATING, 
    FILTER_GENRE, 
    RESET_FILTERS} from '../actions/actions';




const initialState = {
    videogames: [],
    orderedVideogames: [],
    
    genres: [],
    idGame: {

    },
    currentGenre: '',
    genreFiltered: false, // filtrado por genero?
    searched: false, // buscado por el cliente?
    alphaFiltered: false, // ordenado A-Z?
    ratingFiltered: false,
    ratingDecreasingFiltered: false,
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
            return {
                ...state,
                videogames: action.payload.data,
                searched: true,
                alphaFiltered: false,
                inverseAlphaFiltered: false,
                ratingFiltered: false,
                ratingDecreasingFiltered: false,
                genreFiltered: false,
                currentGenre: '',
                isEmpty: false,
            };
        case QUERY_RESET_CONTENT:
            return {
                ...state,
                videogames: [...''],
                searched: false,
                isEmpty: true,
                alphaFiltered: false,
                inverseAlphaFiltered: false,
                ratingFiltered: false,
                ratingDecreasingFiltered: false,
                genreFiltered: false,
                currentGenre: '',

            } /* : state.genreFiltered ? {
                ...state,
                orderedVideogames: action.payload.data.filter(elem => {
                    let flag;
                    elem.genres.forEach(elem => {
                        if(elem.name === state.currentGenre) flag = true;
                    })
                    if(flag) return elem;
                }),
                searched: true
            } : state.alphaFiltered ? {
                ...state,
                orderedVideogames: action.payload.data.sort((a,b) => {
                   
                        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                    
                }),
                searched: true,
            } : state.inverseAlphaFiltered ? {
                ...state, 
                orderedVideogames: action.payload.data.sort((a,b) => {
                    return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
                })   
            } : state.ratingFiltered ? {
                ...state, 
                orderedVideogames: action.payload.data.sort((a,b) => {
                    return a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0;
                }),
                searched: true, 
            } : state.ratingDecreasingFiltered ? {
                ...state, 
                orderedVideogames: action.payload.data.sort((a,b) => {
                    return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
                }),
                searched: true,  
            } : { // CONFIGURAR -----> ACTION.PAYLOAD EN EL FOREACH DEBE SER EL GÉNERO CORRIENTE
                
            }; */
        case GET_GENRES: 
        return {
            ...state,
            genres: action.payload.data,
        };
        case SHOW_GAME_BY_ID_SERVER:
            console.log(action.payload);
            return action.payload === 'Not Found' ? {...state,
                idGame: 'empty',
            } : {
                ...state,
                idGame: action.payload === 'reset' ? {} : action.payload,
                isGameIdEmpty: action.payload === 'reset' ? true : false,
            };
        case SHOW_GAME_BY_ID:
            return {
                ...state,
                idGame: action.payload,
                isGameIdEmpty: false,
            }
        case FILTER_ALPHA:

            return !state.genreFiltered ? { // no se ordenó previamente de A-Z
                ...state,
                orderedVideogames: [...state.videogames].sort((a, b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                }),
                alphaFiltered: true,
                inverseAlphaFiltered: false,
                ratingFiltered: false,
                ratingDecreasingFiltered: false,

            } : {

                ...state,
                orderedVideogames: [...state.orderedVideogames].sort((a, b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                }),
                alphaFiltered: true,
                inverseAlphaFiltered: false,
                ratingFiltered: false,
                ratingDecreasingFiltered: false,
            } /* : state.genreFiltered ? {

                    ...state,
                    orderedVideogames: [...state.orderedVideogames].sort((a, b) => {
                        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                    }),
                    alphaFiltered: !state.alphaFiltered,

            } : state.searched && !state.alphaFiltered ? { // se buscó, pero no se ordenó previamente de A-Z
                ...state,
                searchVideogames: [...state.searchVideogames].sort((a,b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                }),
                alphaFiltered: !state.alphaFiltered,
            } : {...state, alphaFiltered: !state.alphaFiltered}; */
        case FILTER_INVERSE_ALPHA: 
        return !state.genreFiltered ? {
            ...state,
            orderedVideogames: [...state.videogames].sort((a,b) => {
                return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
            }),
            inverseAlphaFiltered: true,
            alphaFiltered: false,
            ratingFiltered: false,
            ratingDecreasingFiltered: false,
        } : {
            ...state,
            orderedVideogames: [...state.orderedVideogames].sort((a,b) => {
                return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
            }),
            inverseAlphaFiltered: true,
            alphaFiltered: false,
            ratingFiltered: false,
            ratingDecreasingFiltered: false,
        };
        case FILTER_RATING:
            return !state.genreFiltered ? {
                ...state,
                orderedVideogames: [...state.videogames].sort((a,b) => {
                    return a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0;
                }),
                inverseAlphaFiltered: false,
                alphaFiltered: false,
                ratingFiltered: true,
                ratingDecreasingFiltered: false,
            } : {
                ...state,
                orderedVideogames: [...state.orderedVideogames].sort((a,b) => {
                    return a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0;
                }),
                inverseAlphaFiltered: false,
                alphaFiltered: false,
                ratingFiltered: true,
                ratingDecreasingFiltered: false,
            };
        case FILTER_DECREASING_RATING: 
        return !state.genreFiltered ? {
            ...state,
            orderedVideogames: [...state.videogames].sort((a,b) => {
                return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
            }),
            inverseAlphaFiltered: false,
            alphaFiltered: false,
            ratingFiltered: false,
            ratingDecreasingFiltered: true,
        } : {
            ...state,
            orderedVideogames: [...state.orderedVideogames].sort((a,b) => {
                return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
            }),
            inverseAlphaFiltered: false,
            alphaFiltered: false,
            ratingFiltered: false,
            ratingDecreasingFiltered: true,
        };
        case FILTER_GENRE:

            return  action.payload == 'None' ? {
                ...state,
                orderedVideogames: [...state.videogames],
                genreFiltered: false,
                currentGenre: "",
            } : !state.alphaFiltered && !state.inverseAlphaFiltered && !state.ratingFiltered && !state.ratingDecreasingFiltered ? { 
                ...state,
                orderedVideogames: [...state.videogames].filter((elem) => {
                    let flag;
                    elem.genres.forEach(elem => {
                        if(elem.name === action.payload) flag = true;
                    })
                    if(flag) return elem;
                }),
                genreFiltered: true,
                currentGenre: action.payload,
            } : state.alphaFiltered ? {
                ...state,
                orderedVideogames: [...state.videogames].filter((elem) => {
                    let flag;
                    elem.genres.forEach(elem => {
                        if(elem.name === action.payload) flag = true;
                    })

                    if(flag) return elem;
                    
                }).sort((a,b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                }),
                genreFiltered: true,
                currentGenre: action.payload,
            } : state.inverseAlphaFiltered ? {
                ...state,
                orderedVideogames: [...state.videogames].filter((elem) => {
                    let flag;
                    elem.genres.forEach(elem => {
                        if(elem.name === action.payload) flag = true;
                    })

                    if(flag) return elem;
                    
                }).sort((a,b) => {
                    return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
                }),
                genreFiltered: true,
                currentGenre: action.payload,
            } : state.ratingFiltered ? {
                ...state,
                orderedVideogames: [...state.videogames].filter((elem) => {
                    let flag;
                    elem.genres.forEach(elem => {
                        if(elem.name === action.payload) flag = true;
                    })

                    if(flag) return elem;
                }).sort((a,b) => {
                    return a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0;
                }),
                genreFiltered: true,
                currentGenre: action.payload,
            } : {
                ...state,
                orderedVideogames: [...state.videogames].filter((elem) => {
                    let flag;
                    elem.genres.forEach(elem => {
                        if(elem.name === action.payload) flag = true;
                    })

                    if(flag) return elem;
                }).sort((a,b) => {
                    return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
                }),
                genreFiltered: true,
                currentGenre: action.payload,
            }
                /* : state.searched && !state.alphaFiltered && !state.genreFiltered ? { // hay algo buscado, pero no ordenado
                ...state,
                searchVideogames: [...state.searchVideogames].filter(elem => elem.genres === action.payload),
                genreFiltered: !state.genreFiltered,
                
            } : state.filtered && state.searched && !state.genreFiltered ? { 
                // hay algo buscado, previamente ordenado pero no por género
            } : {...state, filtered: !state.alphaFiltered}; */
            case RESET_FILTERS:
                return {
                    ...state,
                    alphaFiltered: false,
                inverseAlphaFiltered: false,
                ratingFiltered: false,
                ratingDecreasingFiltered: false,
                
                }
        default:
            return state;
    }
}

export default rootReducer;