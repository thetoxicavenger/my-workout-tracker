import mockData from './mock-data'

export default {
    getWorkoutTypes: () => new Promise((resolve, reject) => {
        resolve(mockData.workoutTypes)
    })
}