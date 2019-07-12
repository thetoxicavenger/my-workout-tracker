import React from 'react'
import HomeNav from '../components/HomeNav/HomeNav'
import Divider from '../components/Divider/Divider'
import SelectWorkout from '../components/SelectWorkout/SelectWorkout'

class Home extends React.Component {
    render() {
        return (
            <>
                <HomeNav />
                <Divider />
                <SelectWorkout 
                    topHeadlineText={"Your Next Workout"}
                    nextWorkoutText={"Maybe Yoga Today?"}
                />
            </>
        )
    }
}

export default Home