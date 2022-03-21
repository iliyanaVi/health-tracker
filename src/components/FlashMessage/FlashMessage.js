import styles from "./FlashMessage.module.scss";

function FlashMessage({ show, message, type }) {
  return (
    <>
      {show && (
        <div className="d-flex justify-content-center">
          <div
            className={`${styles.messageWrapper} ${
              type === "success" ? styles.messageSuccess : styles.messageError
            } text-center `}
          >
            <p className="mt-4">{message}</p>
          </div>
        </div>
      )}
    </>
  );
}
export default FlashMessage;
