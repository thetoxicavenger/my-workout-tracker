import React from 'react'
import styles from './SelectWorkout.module.css'
import '../../theme.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import WorkoutOptionsContainer from '../../redux/containers/WorkoutOptionsContainer'

function SelectWorkout({ topHeadlineText, nextWorkoutText }) {
    const classes = {
        container: classNames('primary-background-color', styles.container),
        topHeadline: classNames('secondary-text-color', styles['top-headline']),
        newWorkout: classNames(
            'h2-top-margin',
            'primary-text-color'
        )
    }
    return (
        <>
            <div className={classes.container}>
                <h4 className={classes.topHeadline}>{topHeadlineText}</h4>
                <h2 className={classes.newWorkout}>{nextWorkoutText}</h2>
                <WorkoutOptionsContainer />
            </div>
        </>
    )
}

SelectWorkout.defaultProps = {
    topHeadlineText: "Your Next Workout",
    nextWorkoutText: "Maybe Yoga Today?"
}

SelectWorkout.propTypes = {
    topHeadlineText: PropTypes.string.isRequired,
    nextWorkoutText: PropTypes.string.isRequired
}

export default SelectWorkout