import "./FaqItem.css";

/** Shows one question that opens to reveal its answer. */
const FaqItem = ({ question, answer }) => {
  return (
    <details className="faq">
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
};

export default FaqItem;
