import React from "react";
import Layout from "../Layouts/Layout";
import { useState } from "react";
import "../styles/contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <div className="container">
        <div className="contact">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label>Your Name</label>
              <input
                type="text"
                value={name}
                name="name"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div className="input">
              <label>Your Email</label>
              <input
                type="text"
                value={email}
                name="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="message">
              <label>Your Message</label>
              <textarea
                required
                value={message}
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>

            <div className="input">
              <input type="submit" name="Submit" className="submit" />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
