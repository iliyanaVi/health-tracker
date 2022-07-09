import { useTranslation } from "react-i18next";

import { useContext, useEffect, useState } from "react";
import WorkoutsContext from "../../context/workouts-context";

import WorkoutCard from "../RecordCard/Item";
import WorkoutForm from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import InputError from "../InputError/InputError";

import useInput from "../../hooks/use-input";

import styles from "./WorkoutsPage.module.scss";

function Workouts() {
  const { t } = useTranslation();

  const workoutsCtx = useContext(WorkoutsContext);
  console.log(workoutsCtx.workouts);
  let [isFirstRender, setIsFirstRender] = useState(false);

  useEffect(() => {
    setIsFirstRender(true);
  }, []);

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
    setIsFirstRender(false);

    if (isWorkoutTypeValid && isCaloriesBurnedValid && isDurationValid) {
      const workoutData = {
        id: Number(Math.random() * 100).toFixed(0),
        workoutType: workoutType,
        caloriesBurned: caloriesBurned,
        duration: duration,
      };
      workoutsCtx.addWorkout(workoutData);

      resetWorkoutTypeInput();
      resetCaloriesBurnedInput();
      resetDurationInput();
      setIsFirstRender(true);
    }
  };

  return (
    <div className={`${styles.workoutsWrapper}`}>
      <div className={`${styles.formWrapper} my-5`}>
        <WorkoutForm
          onSubmit={submitHandler}
          className={`g-3 d-flex flex-column justify-content-between`}
        >
          <div className={`py-5`}>
            <InputWrapper>
              <Input
                type="text"
                id="workoutType"
                label={t("trackWorkoutsPage.workoutType")}
                onChange={workoutTypeOnChange}
                onBlur={workoutTypeOnBlur}
                value={workoutType || ""}
              />
              {!isFirstRender && workoutTypeHasError && (
                <InputError errorText={t("trackWorkoutsPage.provideWorkout")} />
              )}
            </InputWrapper>
            <InputWrapper>
              <Input
                type="number"
                id="calories-burned"
                label={t("common.caloriesBurned")}
                onChange={caloriesBurnedOnChange}
                onBlur={caloriesBurnedOnBlur}
                value={caloriesBurned || ""}
              />
              {!isFirstRender && caloriesBurnedHasError && (
                <InputError errorText={t("common.amountAbovezeroError")} />
              )}
            </InputWrapper>
            <InputWrapper>
              <Input
                type="number"
                id="duration"
                label={t("common.duration")}
                onChange={durationOnChange}
                onBlur={durationOnBlur}
                value={duration || ""}
              />
              {!isFirstRender && durationHasError && (
                <InputError errorText={t("common.amountAbovezeroError")} />
              )}
            </InputWrapper>
          </div>
          <Button className="mb-5" text="Add" />
        </WorkoutForm>
      </div>
      <div>
        {workoutsCtx.workouts &&
          workoutsCtx.workouts.map((workout, index) => {
            return (
              <WorkoutCard
                key={index}
                id={workout.id}
                context={"workouts"}
                valueOne={workout.workoutType}
                valueTwo={workout.caloriesBurned}
                valueThree={workout.duration}
                labelOne="workout type"
                labelTwo="calories burned"
                labelThree="duration"
              />
            );
          })}
      </div>
    </div>
  );
}
export default Workouts;
