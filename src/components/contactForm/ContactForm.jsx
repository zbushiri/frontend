import { useState } from "react";
import toast from "react-hot-toast";
import "./ContactForm.css";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setSending(true);
    setResult("Your message is getting ready for takeoff...");

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        setResult("DING DING! Message sent to Cozy Corner!");
        toast.success("Message sent!");
        form.reset();
      } else {
        setResult("Oops! " + data.message);
        toast.error("Message not sent.");
      }
    } catch (error) {
      setResult("The message was lost in the clouds. Please try again.");
      toast.error("Message not sent.");
    }

    setSending(false);
    setTimeout(() => setResult(""), 1000);
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <label htmlFor="contact-name">Name</label>
      <input id="contact-name" name="name" type="text" required />
      <label htmlFor="contact-email">Email</label>
      <input id="contact-email" name="email" type="email" required />
      <label htmlFor="contact-subject">Subject</label>
      <input id="contact-subject" name="subject" type="text" required />
      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows="6" required></textarea>
      <button className="button" type="submit" disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
      <p className="form-result" role="status">{result}</p>
    </form>
  );
};

export default ContactForm;
