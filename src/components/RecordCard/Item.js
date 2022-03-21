import { useContext, useState } from "react";

import WorkoutsContext from "../../context/workouts-context";
import FoodIntakeContext from "../../context/food-intake-context";

import styles from "./Item.module.scss";

function RecordCard({
  id,
  valueOne,
  valueTwo,
  valueThree,
  labelOne,
  labelTwo,
  labelThree,
  context,
}) {
  let ctx;
  const foodIntakeContext = useContext(FoodIntakeContext);
  const workoutsCtx = useContext(WorkoutsContext);

  if (context === "workouts") {
    ctx = workoutsCtx;
  }
  if (context === "food-intake") {
    ctx = foodIntakeContext;
  }

  const onDeleteHandler = () => {
    ctx.deleteItem(id);
  };

  return (
    <div
      className={`${styles.wrapper} d-flex align-items-center justify-content-between px-3 mb-3`}
    >
      <div className={`d-flex flex-column p-2 flex-grow-1 me-5`}>
        <p className={`align-self-start ${styles.label}`}>{labelOne}</p>
        <p className={`align-self-start`}>{valueOne}</p>
      </div>
      <div className={`d-flex flex-column me-5`}>
        <p className={`align-self-start ${styles.label}`}>{labelTwo}</p>
        <p className={`align-self-start`}>{valueTwo}</p>
      </div>
      <div className={`d-flex flex-column me-5`}>
        <p className={`align-self-start ${styles.label}`}>{labelThree}</p>
        <p className={`align-self-start`}>{valueThree}</p>
      </div>
      <button onClick={onDeleteHandler}>X</button>
    </div>
  );
}
export default RecordCard;
