import { useContext, useEffect, useState } from "react";
import FoodIntakesContext from "../../context/food-intake-context";

import useInput from "../../hooks/use-input";

import FoodIntakeCard from "../RecordCard/Item";
import FoodIntakeForm from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import InputError from "../InputError/InputError";

import styles from "./FoodIntakePage.module.scss";

function FoodIntakes() {
  const foodIntakesCtx = useContext(FoodIntakesContext);
  console.log(foodIntakesCtx.foodIntakes);

  let [isFirstRender, setIsFirstRender] = useState(false);

  useEffect(() => {
    setIsFirstRender(true);
  }, []);

  const {
    value: mealName,
    isValid: isMealNameValid,
    hasError: mealNameHasError,
    valueChangeHandler: mealNameOnChange,
    valueBlurHandler: mealNameOnBlur,
    reset: resetMealNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: amount,
    isValid: isAmountValid,
    hasError: amountHasError,
    valueChangeHandler: amountOnChange,
    valueBlurHandler: amountOnBlur,
    reset: resetAmountInput,
  } = useInput((value) => Number(value) > 0);

  const {
    value: calories,
    isValid: isCaloriesValid,
    hasError: caloriesHasError,
    valueChangeHandler: caloriesOnChange,
    valueBlurHandler: caloriesOnBlur,
    reset: resetCaloriesInput,
  } = useInput((value) => Number(value) > 0);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsFirstRender(false);

    if (isMealNameValid && isAmountValid && isCaloriesValid) {
      const input = {
        id: Number(Math.random() * 100).toFixed(0),
        mealName: mealName,
        amount: amount,
        calories: calories,
      };
      foodIntakesCtx.addFoodIntake(input);

      resetMealNameInput();
      resetAmountInput();
      resetCaloriesInput();
      setIsFirstRender(true);
    }
  };

  return (
    <div className={`d-flex justify-content-between`}>
      <div className={`${styles.formWrapper} my-5`}>
        <FoodIntakeForm
          onSubmit={submitHandler}
          className={`g-3 d-flex flex-column justify-content-between `}
        >
          <div className={`mb-3 py-5`}>
            <InputWrapper>
              <Input
                type="text"
                id="meal-name"
                label="Meal name"
                onChange={mealNameOnChange}
                onBlur={mealNameOnBlur}
                value={mealName || ""}
                required
              />
              {!isFirstRender && mealNameHasError && (
                <InputError errorText="Please provide meal name" />
              )}
            </InputWrapper>

            <InputWrapper>
              <Input
                type="number"
                id="amount"
                label="Amount in grams"
                onChange={amountOnChange}
                onBlur={amountOnBlur}
                value={amount || ""}
              />
              {!isFirstRender && amountHasError && (
                <InputError errorText={"Amount cannot be under 0"} />
              )}
            </InputWrapper>

            <InputWrapper>
              <Input
                type="number"
                id="calories"
                label="Calories"
                onChange={caloriesOnChange}
                onBlur={caloriesOnBlur}
                value={calories || ""}
              />
              {!isFirstRender && caloriesHasError && (
                <InputError errorText="Calories cannot be under 0" />
              )}
            </InputWrapper>
          </div>
          <Button className="mb-5" text="Add" />
        </FoodIntakeForm>
      </div>
      <div>
        {foodIntakesCtx.foodIntakes &&
          foodIntakesCtx.foodIntakes.map((foodIntake, index) => {
            return (
              <FoodIntakeCard
                key={index}
                id={foodIntake.id}
                context={"food-intake"}
                valueOne={foodIntake.mealName}
                valueTwo={foodIntake.amount}
                valueThree={foodIntake.calories}
                labelOne="meal name"
                labelTwo="amount"
                labelThree="calories"
              />
            );
          })}
      </div>
    </div>
  );
}
export default FoodIntakes;
