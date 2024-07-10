import { useState } from "react";
import axios from "axios";

export default function Widget() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    try {
      const response = await axios.post(endpoint, { name, email, message });
      if (response.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="background" id="connect">
      <div className="overlay">
        <div className="contact-form-container">
          {!submitted ? (
            <>
              <h2 className="contact-title">Get In Touch</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Message"
                    className="form-control"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Send
                </button>
              </form>
            </>
          ) : (
            <p className="submit-message">Thank you for your message!</p>
          )}
        </div>
      </div>
    </div>
  );
}
