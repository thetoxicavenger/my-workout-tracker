import React from 'react'
import styles from './WorkoutTypeLink.module.css'
import classNames from 'classnames'
import '../../theme.css'

function WorkoutTypeLink({ name, icon }) {
    const classes = {
        container: classNames('primary-background-color', 'light', styles.container)
    }
    return (
        <div className={classes.container}>
            <div>
                <a href="/">Hey</a>
            </div>
        </div>
    )
}

export default WorkoutTypeLink
