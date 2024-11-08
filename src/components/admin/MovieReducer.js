export const initialState = {
    homeData: [],
    action: [],
    anime: [],
    phimviet: [],
    error: null,
};

export const movieReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                homeData: action.payload.homeData,
                action: action.payload.action,
                anime: action.payload.anime,
                phimviet: action.payload.phimviet,
                error: null,
            };
        case 'FETCH_ERROR':
            return { ...state, error: 'Failed to fetch movies' };
        case 'ADD_MOVIE':
            return {
                ...state,
                [action.category]: [...state[action.category], action.payload],
            };
        case 'DELETE_MOVIE':
            return {
                ...state,
                [action.category]: state[action.category].filter(movie => movie.id !== action.payload),
            };
        case 'EDIT_MOVIE':
            return {
                ...state,
                [action.category]: state[action.category].map(movie =>
                    movie.id === action.payload.id ? action.payload : movie
                ),
            };
        default:
            return state;
    }
};