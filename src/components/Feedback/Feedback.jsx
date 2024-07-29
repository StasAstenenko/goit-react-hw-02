const Feedback = ({ good, neutral, bad, totalFeedback, positive }) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positive}</li>
    </ul>
  );
};

export default Feedback;
