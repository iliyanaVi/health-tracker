import styles from "./Comment.module.scss";

function Comment({ id, name, comment }) {
  return (
    <div className={`${styles.comment} d-flex align-items-center mb-4`}>
      <figure className={`${styles.commentImg} me-3`}>
        <figcaption className={`${styles.nameCaption} m-0`}>{name}</figcaption>
      </figure>
      <div className={`${styles.commentText}`}>
        <p>{comment}</p>
      </div>
    </div>
  );
}
export default Comment;
