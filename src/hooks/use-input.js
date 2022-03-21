import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [missingValue, setMissingValue] = useState(false);

  const isValueValid = validateValue(enteredValue);
  let hasError = !isValueValid || missingValue;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueBlurHandler = (e) => {
    if (e.target.value.trim() === "") {
      setMissingValue(true);
    }
    if (missingValue) {
      validateValue(enteredValue);
    }
  };
  const reset = () => {
    setEnteredValue("");
    setMissingValue(false);
  };
  return {
    value: enteredValue,
    isValid: isValueValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};
export default useInput;
