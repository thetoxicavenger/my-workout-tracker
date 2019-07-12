import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './WorkoutOptions.module.css'
import WorkoutTypeLink from '../WorkoutTypeLink/WorkoutTypeLink' 
import mockData from '../../util/mock-data'

class WorkoutOptions extends React.Component {
    componentDidMount = async () => {
        this.props.getWorkoutTypes()
    }
    render() {
        const { workoutTypes } = this.props
        return (
            <>
                {workoutTypes.map(workoutType => <WorkoutTypeLink key={workoutType.id} {...workoutType} />)}
            </>
        )
    }
}

WorkoutOptions.defaultProps = {
    workoutTypes: mockData.workoutTypes
}

WorkoutOptions.propTypes = {
    workoutTypes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default WorkoutOptions