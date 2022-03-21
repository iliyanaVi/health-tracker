import styles from "./Form.module.scss";

function Form({ className, onSubmit, children }) {
  return (
    <form
      className={`${className ? className : ""} ${styles.form}`}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
export default Form;
