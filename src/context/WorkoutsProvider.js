import { useReducer } from "react";

import WorkoutsContext from "./workouts-context";

const defaultWorkoutState = {
  workouts: [],
};
const workoutReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedWorkouts = state.workouts.concat(action.workout);
    return {
      workouts: updatedWorkouts,
    };
  }
  if (action.type === "DELETE") {
    const updatedWorkouts = state.workouts.filter((workout) => {
      return workout.id !== action.id;
    });
    return {
      workouts: updatedWorkouts,
    };
  }
   return defaultWorkoutState;
};

const WorkoutProvider = (props) => {
  const [workoutState, dispatchWorkoutsAction] = useReducer(
    workoutReducer,
    defaultWorkoutState
  );

  const addWorkoutToList = (workout) => {
    dispatchWorkoutsAction({ type: "ADD", workout: workout });
  };
  const deleteWorkoutFromList = (id) => {
    dispatchWorkoutsAction({ type: "DELETE", id: id });
  };

  const workoutsContext = {
    workouts: workoutState.workouts,
    addWorkout: addWorkoutToList,
    deleteItem: deleteWorkoutFromList,
  };
  return (
    <WorkoutsContext.Provider value={workoutsContext}>
      {props.children}
    </WorkoutsContext.Provider>
  );
};
export default WorkoutProvider;
