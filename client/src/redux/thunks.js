import api from '../util/api'
import { loadingWorkoutTypes, receiveWorkoutTypes, errorLoadingWorkoutTypes } from './actions'

export function getWorkoutTypes() {
    return async function(dispatch) {
        dispatch(
            loadingWorkoutTypes()
        )
        try {
            const workoutTypes = await api.getWorkoutTypes()
            dispatch(
                receiveWorkoutTypes(workoutTypes)
            )
            
        } catch (e) {
            dispatch(
                errorLoadingWorkoutTypes()
            )
        }
    }
}