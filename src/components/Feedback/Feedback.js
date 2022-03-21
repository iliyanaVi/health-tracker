import { useEffect, useState } from "react";

import Comment from "../Comment/Comment";

import styles from "./Feedback.module.scss";

function Feedback() {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      setIsLoading(true);
      setFetchError(false);
      const response = await fetch(
        "https://health-tracker-44408-default-rtdb.europe-west1.firebasedatabase.app/feedback.json"
      );

      if (!response) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedFeedback = [];

      for (const key in responseData) {
        loadedFeedback.push({
          id: key,
          name: responseData[key].name,
          text: responseData[key].text,
        });
      }
      setFeedback(loadedFeedback);
      setIsLoading(false);
    };

    fetchFeedback().catch((error) => {
      setIsLoading(false);
      setFetchError(error.message);
    });
  }, []);

  return (
    <div
      className={`container-sm ${styles.feedbackSection} my-5 justify-center`}
    >
      {isLoading && <p>Loading...</p>}
      {fetchError && <p>Error</p>}
      {console.log(feedback)}
      {!isLoading &&
        !fetchError &&
        feedback &&
        feedback.map((feedbackItem) => {
          return (
            <Comment
              key={feedbackItem.id}
              id={feedbackItem.id}
              name={feedbackItem.name}
              comment={feedbackItem.text}
            />
          );
        })}
    </div>
  );
}
export default Feedback;
