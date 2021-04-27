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
    FILTER_BOTH,
    FILTER_USER_CREATOR,
    FILTER_API_CREATOR,
    RESET_FILTERS} from '../actions/actions';




const initialState = {
    videogames: [],
    orderedVideogames: [], 
    genres: [],
    idGame: {},
    currentGenre: '',
    filtered: false,
    /* genreFiltered: false, */ // filtrado por genero?
    searched: false, // buscado por el cliente? IMPORTANTE
   /*  alphaFiltered: false, // ordenado A-Z?
    ratingFiltered: false,
    ratingDecreasingFiltered: false,
    inverseAlphaFiltered: false, */ // ordenado Z-A?
    isEmpty: true, // está vacio videogames: [] ? IMPORTANTE
    isGameIdEmpty: true, // está vacio el juego seleccionado idGame: {} IMPORTANTE
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
                filtered: false, 
                searched: true,
              /*   alphaFiltered: false,
                inverseAlphaFiltered: false,
                ratingFiltered: false,
                ratingDecreasingFiltered: false,
                genreFiltered: false, */
                currentGenre: '',
                isEmpty: false,
            };
        case QUERY_RESET_CONTENT:
            return {
                ...state,
                videogames: [...''],
                filtered: false,
                searched: false,
                isEmpty: true,
                /* alphaFiltered: false,
                inverseAlphaFiltered: false,
                ratingFiltered: false,
                ratingDecreasingFiltered: false,
                genreFiltered: false, */
                currentGenre: '',

            } 
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

            return !state.filtered ? {
                ...state,
                orderedVideogames: [...state.videogames].sort((a,b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                }),
                filtered: true,
            } : {
                ...state,
                orderedVideogames: [...state.orderedVideogames].sort((a, b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                })
            } 
        case FILTER_INVERSE_ALPHA: 
        return !state.filtered ? {
            ...state,
            orderedVideogames: [...state.videogames].sort((a,b) => {
                return a.name < b.name ? 1 : a.name > b.name? -1 : 0;
            }),
            filtered: true,
        } : {
            ...state,
            orderedVideogames: [...state.orderedVideogames].sort((a, b) => {
                return a.name < b.name ? 1 : a.name > b.name ? -1 : 0;
            })
        }
        
         
        case FILTER_RATING:
            return !state.filtered? {
                ...state,
                orderedVideogames: [...state.videogames].sort((a,b) => {
                    return a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0;
                }),
                filtered: true,
            } : {
                ...state,
                orderedVideogames: [...state.orderedVideogames].sort((a,b) => {
                    return a.rating < b.rating ? -1 : a.rating > b.rating ? 1 : 0;
                }),
            }
            
        case FILTER_DECREASING_RATING: 
        return !state.filtered ? {
            ...state,
            orderedVideogames: [...state.videogames].sort((a,b) => {
                return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
            }),
          filtered: true,
        } : {
            ...state,
            orderedVideogames: [...state.orderedVideogames].sort((a,b) => {
                return a.rating < b.rating ? 1 : a.rating > b.rating ? -1 : 0;
            }),

        }; 
        case FILTER_GENRE:

            return !state.filtered ?
            {
            ...state,
            orderedVideogames: [...state.videogames].filter((elem) => {
                let flag;
                elem.genres.forEach(elem => {
                    if(elem.name === action.payload) flag = true;
                })

                if(flag) return elem;
                
            }),
            filtered: true,
            currentGenre: action.payload, } : {

                ...state,
                orderedVideogames: [...state.orderedVideogames].filter((elem) => {

                    let flag;
                    elem.genres.forEach(elem => {
                        if(elem.name === action.payload) flag = true;

                    })

                    if(flag) return elem;
                }),
                currentGenre: action.payload,
            }
            case RESET_FILTERS:
                return {
                    ...state,
                    /* alphaFiltered: false,
                inverseAlphaFiltered: false,
                ratingFiltered: false,
                ratingDecreasingFiltered: false, */

                filtered: false,
                }
            case FILTER_USER_CREATOR:
                return {
                    ...state,
                    orderedVideogames: [...state.videogames].filter(elem => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(elem.id)),
                    filtered: true,
                } 
            case FILTER_BOTH:
                return {
                    ...state,
                    filtered: false,
                       };
            case FILTER_API_CREATOR:
                return {
                    ...state,
                    orderedVideogames: [...state.videogames].filter(elem => Number.isInteger(elem.id)),
                    filtered: true,
                       }
        default:
            return state;
    }
}

export default rootReducer;