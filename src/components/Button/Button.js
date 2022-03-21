import styles from "./Button.module.scss";

function Button({ text, onClick, className }) {
  return (
    <div className="text-center">
      <button
        className={`${className ? className : ""} btn ${styles.btnPrimary}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
export default Button;
