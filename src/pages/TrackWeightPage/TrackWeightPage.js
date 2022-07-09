import { useTranslation } from "react-i18next";
import TrackWeightProvider from "../../context/TrackWeightProvider";
import TrackWeight from "../../components/TrackWeight/TrackWeight";
import styles from "./TrackWeightPage.module.scss";

function TrackWeightPage() {
  const { t } = useTranslation();

  return (
    <TrackWeightProvider>
      <section
        className={`vh-100 container-sm text-center ${styles.workoutSection}`}
      >
        <h2 className={styles.heading}>{t("trackWeightPage.trackWeight")}</h2>
        <TrackWeight />
        {/* it will show difference in the kg and report of the weight tracking process */}
      </section>
    </TrackWeightProvider>
  );
}
export default TrackWeightPage;
