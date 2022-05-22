import { useTranslation } from "react-i18next";
import FoodIntakeProvider from "../../context/FoodIntakeProvider";
import FoodIntakes from "../../components/FoodIntakes/FoodIntakes";
import styles from "./FoodIntakePage.module.scss";

function FoodIntakePage() {
  const { t } = useTranslation();

  return (
    <FoodIntakeProvider>
      <section className={`container-sm text-center`}>
        <h2 className={`${styles.heading} mb-5`}>
          {t("foodIntakePage.trackFood")}
        </h2>
        <FoodIntakes />
      </section>
    </FoodIntakeProvider>
  );
}
export default FoodIntakePage;
