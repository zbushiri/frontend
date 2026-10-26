import "./FaqItem.css";

const FaqItem = ({ question, answer }) => {
  return (
    <details className="faq">
      <summary>{question}</summary>
      <p>{answer}</p>
    </details>
  );
};

export default FaqItem;
