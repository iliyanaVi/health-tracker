import WorkoutProvider from "../../context/WorkoutsProvider";

import Workouts from "../../components/Workouts/Workouts";

import styles from "./WorkoutsPage.module.scss";

function WorkoutsPage() {
  return (
    <WorkoutProvider>
      <section className={`container-sm text-center ${styles.workoutSection}`}>
        <h2 className={`${styles.heading} mb-5`}>Track your workouts</h2>
        <Workouts />
      </section>
    </WorkoutProvider>
  );
}
export default WorkoutsPage;
