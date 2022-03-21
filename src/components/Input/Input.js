import styles from "./Input.module.scss";

function Input({ type, id, label, onChange, onBlur, value }) {
  return (
    <div className="form-floating">
      <input
        type={type}
        className={`form-control ${styles.input} `}
        id={id}
        placeholder={label}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ""}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
export default Input;
