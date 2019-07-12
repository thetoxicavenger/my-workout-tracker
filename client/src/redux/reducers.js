import { LOADING_WORKOUT_TYPES, RECEIVE_WORKOUT_TYPES, ERROR_LOADING_WORKOUT_TYPES } from './actions'

const initialState = {
    workoutTypes: {
        byId: {},
        allIds: [],
        loading: false,
        error: false
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_WORKOUT_TYPES:
            return {
                ...state,
                workoutTypes: {
                    ...state.workoutTypes,
                    loading: true
                }
            }
        case RECEIVE_WORKOUT_TYPES:
            return {
                ...state,
                workoutTypes: {
                    ...state.workoutTypes,
                    byId: action.payload.reduce((acc, type) => {
                        return {
                            ...acc,
                            [type.id]: type
                        }
                    }, {}),
                    allIds: action.payload.map(type => type.id),
                    loading: false,
                    error: false
                }
            }
        case ERROR_LOADING_WORKOUT_TYPES:
            return {
                ...state,
                workoutTypes: {
                    ...state.workoutTypes,
                    loading: false,
                    error: true
                }
            }
        default:
            return state;
    }
}

export default reducer