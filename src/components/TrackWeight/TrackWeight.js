import { useContext } from "react";

import TrackWeightForm from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import TrackWeightContext from "../../context/track-weight-context";
import useInput from "../../hooks/use-input";

import styles from "./TrackWeight.module.scss";

function TrackWeight() {
  const trackWeightCtx = useContext(TrackWeightContext);

  const {
    value: currentWeight,
    isValid: isCurrentWeightValid,
    hasError: currentWeightHasError,
    valueChangeHandler: currentWeightOnChange,
    valueBlurHandler: currentWeightOnBlur,
    reset: resetCurrentWeightInput,
  } = useInput((value) => value.trim() !== "");

  const submitHandler = (e) => {
    e.preventDefault();
    if (isCurrentWeightValid) {
      const input = 
        //could be array with different weight values accordin to the date but for now it's one value
        currentWeight
      ;
      trackWeightCtx.addWeightValue(input);
      resetCurrentWeightInput();
    }
  };

  return (
    <div className={`d-flex justify-content-between`}>
      <div className={`${styles.formWrapper} my-5`}>
        <TrackWeightForm
          onSubmit={submitHandler}
          className={`g-3 d-flex flex-column justify-content-between`}
        >
          <div className={`py-5`}>
            <Input
              type="number"
              id="currentWeight"
              label="Current Weight"
              onChange={currentWeightOnChange}
              onBlur={currentWeightOnBlur}
              value={currentWeight || ""}
            />
          </div>
          <Button className="mb-5" text="Add" />
        </TrackWeightForm>
      </div>
      <div className={`w-25`}>
        {/* //for now it will be shown the current weight and the desired weight(taken from the profile info) and dfference in kg */}
        <div>
          <p>{trackWeightCtx.currentWeight}</p>
        </div>
      </div>
    </div>
  );
}
export default TrackWeight;
