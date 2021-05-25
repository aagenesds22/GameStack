import {ActionTypes} from '../actions/types';


const {

    queryContent, 
    querySearchContent, 
    queryResetContent,
    getGenres,
    showGameByIdServer,
    filterAlpha,
    filterInverseAlpha,
    filterIncreaseRating,
    filterDecreasingRating,
    filterGenre,
    filterByCreatorApi,
    filterByCreatorUser,
    filterByCreatorBoth,
    resetFilters,

} = ActionTypes;


interface Game {
        id: string|number;
        background_image: string;
        name: string;
        rating: number;
        released: string;
        genres: {
            name:string, 
            id:number, 
            createdAt?: string}[];
}
    


export interface globalState {
    videogames: Game[];
    orderedVideogames: Game[];
    genres: {name:string; id:number;}[];
    idGame: {};
    currentGenre: string;
    filtered:boolean;
    searched:boolean; 
    isEmpty: boolean;
    isGameIdEmpty: boolean;
};




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

    }, action:{type: number; payload: any;}) => {
    switch(action.type){

        case queryContent:
            return {
                ...state,
                videogames: action.payload.data,
                isEmpty: false,
            };
        case querySearchContent: 
            return {
                ...state,
                videogames: action.payload.data,
                filtered: false, 
                searched: true,
                currentGenre: '',
                isEmpty: false,
            };
        case queryResetContent:
            return {
                ...state,
                videogames: [],
                filtered: false,
                searched: false,
                isEmpty: true,
                currentGenre: '',

            } 
        case getGenres: 
        return {
            ...state,
            genres: action.payload.data,
        };
        case showGameByIdServer:

            console.log(action.payload);

            return action.payload === 'Not Found' ? {...state,
                idGame: 'empty',
            } : {
                ...state,
                idGame: action.payload === 'reset' ? {} : action.payload,
                isGameIdEmpty: action.payload === 'reset' ? true : false,
            };
        case filterAlpha:

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
        case filterInverseAlpha: 
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
        
         
        case filterIncreaseRating:
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
            
        case filterDecreasingRating: 
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
        case filterGenre:

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
            case resetFilters:
                return {
                    ...state,
                filtered: false,
                }
            case filterByCreatorUser:
                return {
                    ...state,
                    orderedVideogames: [...state.videogames].filter(elem => typeof elem.id !== 'number'),
                    filtered: true,
                } 
            case filterByCreatorBoth:
                return {
                    ...state,
                    filtered: false,
                       };
            case filterByCreatorApi:
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