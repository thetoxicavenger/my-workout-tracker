import { connect } from 'react-redux'
import WorkoutOptions from '../../components/WorkoutOptions/WorkoutOptions'
import { getWorkoutTypes } from '../thunks'


// function computeWorkoutTypesArray(state) {
//     return 
//     // return state.workoutTypes.allIds.map(function(id) {
//     //     // console.log(state.workoutTypes.byId)
//     //     return state.workoutTypes.byId[id]
//     // })
// }

const mapStateToProps = state => {
    return {
        muscleGroups: undefined
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getWorkoutTypes: () => {
            dispatch(
                getWorkoutTypes()
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutOptions)