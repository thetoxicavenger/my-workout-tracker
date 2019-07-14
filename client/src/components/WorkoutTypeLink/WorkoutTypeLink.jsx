import React from 'react'
import styles from './WorkoutTypeLink.module.css'
import classNames from 'classnames'
import '../../theme.css'
// import * from '../../static/'work

function WorkoutTypeLink({ id, name, url }) {
    const classes = {
        container: classNames('primary-background-color', 'light', styles.container)
    }
    console.log(url)
    return (
        <div className={classes.container}>
            <div>
                <img src={url} alt={`${name} icon`} style={{width: '80%'}} />
            </div>
        </div>
    )
}

export default WorkoutTypeLink
