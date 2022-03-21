import styles from "./InputError.module.scss";

function InputError({ errorText }) {
  return <p className={`${styles.error} align-self-start`}>{errorText}</p>;
}
export default InputError;
