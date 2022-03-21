import React from "react";

const workoutsContext = React.createContext({
    workouts:[],
    addWorkout: (id)=>{},
    deleteWorkout: (id)=>{}
});
export default workoutsContext;
