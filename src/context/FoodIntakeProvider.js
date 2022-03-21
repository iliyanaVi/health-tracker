import { useReducer } from "react";

import FoodInfoContext from "./food-intake-context";

const defaultFoodIntakeState = {
  foodIntake: [],
};
const foodIntakeReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedFoodIntake = state.foodIntake.concat(action.foodInfo);
    return {
        foodIntake: updatedFoodIntake,
    };
  }
  if (action.type === "DELETE") {
    const updatedFoodIntake = state.foodIntake.filter((foodInfo) => {
      return foodInfo.id !== action.id;
    });
    return {
        foodIntake: updatedFoodIntake,
    };
  }
   return defaultFoodIntakeState;
};

const FoodIntakeProvider = (props) => {
  const [foodIntakeState, dispatchFoodIntakeAction] = useReducer(
    foodIntakeReducer,
    defaultFoodIntakeState
  );

  const addFoodIntakeToList = (foodInfo) => {
    dispatchFoodIntakeAction({ type: "ADD", foodInfo: foodInfo });
  };
  const deleteFoodIntakeFromList = (id) => {
    dispatchFoodIntakeAction({ type: "DELETE", id: id });
  };

  const foodIntakeContext = {
    foodIntakes: foodIntakeState.foodIntake,
    addFoodIntake: addFoodIntakeToList,
    deleteItem: deleteFoodIntakeFromList,
  };
  return (
    <FoodInfoContext.Provider value={foodIntakeContext}>
      {props.children}
    </FoodInfoContext.Provider>
  );
};
export default FoodIntakeProvider;
