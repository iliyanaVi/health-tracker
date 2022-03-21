import { useContext, useState } from "react";

import WorkoutsContext from "../../context/workouts-context";
import useInput from "../../hooks/use-input";

import styles from "./WorkoutForm.module.scss";

function WorkoutForm() {
  const workoutsCtx = useContext(WorkoutsContext);
  const {
    value: workoutType,
    isValid: isWorkoutTypeValid,
    hasError: workoutTypeHasError,
    valueChangeHandler: workoutTypeOnChange,
    valueBlurHandler: workoutTypeOnBlur,
    reset: resetWorkoutTypeInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: caloriesBurned,
    isValid: isCaloriesBurnedValid,
    hasError: caloriesBurnedHasError,
    valueChangeHandler: caloriesBurnedOnChange,
    valueBlurHandler: caloriesBurnedOnBlur,
    reset: resetCaloriesBurnedInput,
  } = useInput((value) => Number(value) > 0);

  const {
    value: duration,
    isValid: isDurationValid,
    hasError: durationHasError,
    valueChangeHandler: durationOnChange,
    valueBlurHandler: durationOnBlur,
    reset: resetDurationInput,
  } = useInput((value) => Number(value) > 0);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      isWorkoutTypeValid &&
      isCaloriesBurnedValid &&
      isDurationValid
    ) {
      const input = {
        id: Number(Math.random() * 100).toFixed(0),
        workoutType: workoutType,
        caloriesBurned: caloriesBurned,
        duration: duration,
      };
      workoutsCtx.addWorkout(input);

      resetWorkoutTypeInput();
      resetCaloriesBurnedInput();
      resetDurationInput();
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`d-flex flex-column justify-content-between p-4 mt-5 ${styles.form}`}
    >
      <div className="d-flex flex-column mb-3">
        <label className="form-label">
          Workout type
          <input
            type="text"
            className="form-control"
            id="workoutType"
            aria-describedby="workoutType"
            onChange={workoutTypeOnChange}
            onBlur={workoutTypeOnBlur}
            value={workoutType || ""}
          />
        </label>
        {workoutTypeHasError && (
          <p className={`${styles.error} p-1 fs-4`}>Please add workout type</p>
        )}
        <label className="form-label">
          Calories burned
          <input
            type="number"
            className="form-control"
            id="calories-burned"
            aria-describedby="calories-burned"
            onChange={caloriesBurnedOnChange}
            onBlur={caloriesBurnedOnBlur}
            value={caloriesBurned || ""}
          />
        </label>
        {caloriesBurnedHasError && (
          <p className={`${styles.error} p-1 fs-4`}>
            Please add valid amount of burned calories
          </p>
        )}
        <label className="form-label">
          Duration
          <input
            type="number"
            className="form-control"
            id="duration"
            aria-describedby="duration"
            onChange={durationOnChange}
            onBlur={durationOnBlur}
            value={duration || ""}
          />
        </label>
        {durationHasError && (
          <p className={`${styles.error} p-1 fs-4`}>
            Please add a valid workout duration
          </p>
        )}
      </div>
      <div className="text-center">
        <button className={`btn ${styles.btnAdd}`}>Add</button>
      </div>
    </form>
  );
}

export default WorkoutForm;
