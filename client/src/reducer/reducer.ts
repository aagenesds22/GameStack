import {QUERY_CONTENT, 
    QUERY_RESET_CONTENT,
    QUERY_SEARCH, 
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


interface Game {
        id: string|number;
        background_image: string;
        name: string;
        rating: number;
        released: string;
        genres: {name:string, id:number, createdAt?: string}[];
}
    

export interface globalState {
    videogames: Game[];
    orderedVideogames: Game[];
    genres: {name:string; id:number; createdAt?:string}[];
    idGame: {};
    currentGenre: string;
    filtered:boolean;
    searched:boolean; 
    isEmpty: boolean;
    isGameIdEmpty: boolean;
};


/* videogames: [],
orderedVideogames: [];
genres: [];
idGame: {};
currentGenre: '';
filtered: false;
searched: false; 
isEmpty: boolean;
isGameIdEmpty: true; */




const rootReducer = (state:globalState = {

    videogames: [],
    orderedVideogames: [],
    genres: [],
    idGame: {},
    currentGenre: '',
    filtered: false,
    searched: false, 
    isEmpty: true,
    isGameIdEmpty: true,

    }, action:{type: string; payload?: any}) => {
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
                currentGenre: '',
                isEmpty: false,
            };
        case QUERY_RESET_CONTENT:
            return {
                ...state,
                videogames: [],
                filtered: false,
                searched: false,
                isEmpty: true,
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
        case FILTER_ALPHA:

            return !state.filtered ? {
                ...state,
                orderedVideogames: [...state.videogames].sort((a,b) => {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0;
                }),
                filtered: true,
            } : {
                ...state,
                orderedVideogames: [...state.orderedVideogames].sort((a, b) => {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0;
                })
            } 
        case FILTER_INVERSE_ALPHA: 
        return !state.filtered ? {
            ...state,
            orderedVideogames: [...state.videogames].sort((a,b) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : a.name.toLowerCase() > b.name.toLowerCase()? -1 : 0;
            }),
            filtered: true,
        } : {
            ...state,
            orderedVideogames: [...state.orderedVideogames].sort((a, b) => {
                return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 0;
            })
        }
        
         
        case FILTER_RATING:
            return !state.filtered? {
                ...state,
                orderedVideogames: [...state.videogames].sort((a,b) => {
                    
                    return a.rating - b.rating;
                }),
                filtered: true,
            } : {
                ...state,
                orderedVideogames: [...state.orderedVideogames].sort((a,b) => {
                 
                    return b.rating - a.rating;
                }),
            }
            
        case FILTER_DECREASING_RATING: 
        return !state.filtered ? {
            ...state,
            orderedVideogames: [...state.videogames].sort((a,b) => {
                const dateNext = new Date(a.released).getTime();
                    const dateBef = new Date(b.released).getTime();
                return dateBef - dateNext;
            }),
          filtered: true,
        } : {
            ...state,
            orderedVideogames: [...state.orderedVideogames].sort((a,b) => {
                const dateNext = new Date(a.released).getTime();
                    const dateBef = new Date(b.released).getTime();
                return dateBef - dateNext;
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

                return flag && elem;
                
            }),
            filtered: true,
            currentGenre: action.payload, } : {

                ...state,
                orderedVideogames: [...state.orderedVideogames].filter((elem) => {

                    let flag;
                    elem.genres.forEach(elem => {
                        if(elem.name === action.payload) flag = true;

                    })

                    return flag && elem;
                }),
                currentGenre: action.payload,
            }
            case RESET_FILTERS:
                return {
                    ...state,
                filtered: false,
                }
            case FILTER_USER_CREATOR:
                return {
                    ...state,
                    orderedVideogames: [...state.videogames].filter(elem => typeof elem.id !== 'number'),
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