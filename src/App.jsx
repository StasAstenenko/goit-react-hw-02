import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const localFeedback = window.localStorage.getItem("localFeedback");
    return (
      JSON.parse(localFeedback) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem("localFeedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    feedbackType !== "reset"
      ? setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 })
      : setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.bad + feedback.good + feedback.neutral;
  const positive = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 && (
        <Feedback
          good={feedback.good}
          bad={feedback.bad}
          neutral={feedback.neutral}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      )}

      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
