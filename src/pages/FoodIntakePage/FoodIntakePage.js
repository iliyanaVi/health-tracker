import FoodIntakeProvider from "../../context/FoodIntakeProvider";

import FoodIntakes from "../../components/FoodIntakes/FoodIntakes";

import styles from "./FoodIntakePage.module.scss";

function FoodIntakePage() {
  return (
    <FoodIntakeProvider>
      <section className={`container-sm text-center`}>
        <h2 className={`${styles.heading} mb-5`}>Track your food intake</h2>
        <FoodIntakes />
      </section>
    </FoodIntakeProvider>
  );
}
export default FoodIntakePage;
