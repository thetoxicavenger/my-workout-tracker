import React from 'react'
import PropTypes from 'prop-types'
import styles from './WorkoutOptions.module.css'
import WorkoutTypeLink from '../WorkoutTypeLink/WorkoutTypeLink'


class WorkoutOptions extends React.Component {
    // componentDidMount = async () => {
    //     this.props.getWorkoutTypes()
    // }
    render() {
        const { muscleGroups } = this.props
        return (
            <>
                <div className={styles.container}>
                    {muscleGroups.map(muscleGroup => <WorkoutTypeLink key={muscleGroup.id} {...muscleGroup} />)}
                </div>
            </>
        )
    }
}

WorkoutOptions.defaultProps = {
    muscleGroups: [
        {
            id: 1,
            name: 'Chest',
            url: 'https://my-workout-tracker.s3-us-west-2.amazonaws.com/chest_icon_yellow.png'
        },
        {
            id: 2,
            name: 'Biceps',
            url: 'https://my-workout-tracker.s3-us-west-2.amazonaws.com/bicep_icon_yellow.svg'
        },
        {
            id: 3,
            name: 'Butt',
            url: 'https://my-workout-tracker.s3-us-west-2.amazonaws.com/butt_icon_yellow.svg'
        },
        {
            id: 4,
            name: 'Back',
            url: 'https://my-workout-tracker.s3-us-west-2.amazonaws.com/back_icon_yellow.svg'
        },
    ]
}

WorkoutOptions.propTypes = {
    muscleGroups: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default WorkoutOptions