// action types
export const LOADING_WORKOUT_TYPES = 'LOADING_WORKOUT_TYPES'
export const RECEIVE_WORKOUT_TYPES = 'RECEIVE_WORKOUT_TYPES'
export const ERROR_LOADING_WORKOUT_TYPES = 'ERROR_LOADING_WORKOUT_TYPES'


export function loadingWorkoutTypes() {
    return {
        type: LOADING_WORKOUT_TYPES
    }
}

export function receiveWorkoutTypes(payload) {
    return {
        type: RECEIVE_WORKOUT_TYPES,
        payload
    }
}

export function errorLoadingWorkoutTypes() {
    return {
        type: ERROR_LOADING_WORKOUT_TYPES
    }
}