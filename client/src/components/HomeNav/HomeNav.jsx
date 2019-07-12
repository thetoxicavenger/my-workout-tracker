import React from 'react'
import styles from './HomeNav.module.css'
import { ReactComponent as PlusIcon } from '../../add-button.svg';

class HomeNav extends React.Component {
    render() {
        return (
            <>
                <div className={styles.container}>
                    <h2>Workouts</h2>
                    <div>
                        <a href="/types/new">
                            <PlusIcon />
                        </a>
                    </div>
                </div>
            </>
        )
    }
}

export default HomeNav