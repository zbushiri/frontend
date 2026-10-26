import PageTitle from "../../components/pageTitle/PageTitle";
import FaqItem from "../../components/faqItem/FaqItem";
import "./Faq.css";

const Faq = () => {
  return (
    <div id="faq" className="page">
      <PageTitle
        eyebrow="Questions"
        title="Frequently Asked Questions"
        text="A few quick answers about Cozy Corner."
      />

      {/* Questions */}
      <section className="faq-grid">
        <FaqItem
          question="What is Cozy Corner?"
          answer="It is a simple place to find anime, release dates, and trailers."
        />
        <FaqItem
          question="How do I find an anime to watch?"
          answer="Visit Anime Shelf to look through the suggestions."
        />
        <FaqItem
          question="Can release dates change?"
          answer="Yes. Always check the official announcement for the final date."
        />
        <FaqItem
          question="Can I watch full anime here?"
          answer="No. Cozy Corner helps you discover anime but does not host episodes."
        />
        <FaqItem
          question="Where do the trailers come from?"
          answer="The trailers are from Crunchyroll."
        />
        <FaqItem
          question="Is Cozy Corner free to use?"
          answer="Yes. You do not need an account to use the site."
        />
        <FaqItem
          question="Does the site work on phones?"
          answer="Yes. The pages change size to fit smaller screens."
        />
        <FaqItem
          question="How do I return to the homepage?"
          answer="Select Cozy Corner at the top of any page."
        />
      </section>
    </div>
  );
};

export default Faq;
