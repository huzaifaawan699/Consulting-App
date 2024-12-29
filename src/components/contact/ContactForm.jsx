"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForm = (event) => {
    event.preventDefault();

    setIsSubmitting(true); // Disable button during submission

    const form = event.target;

    const serviceID = "service_7uqdi6d"; // Replace with your EmailJS service ID
    const templateID = "template_l2rvbgp"; // Replace with your EmailJS template ID
    const userID = "89HU5cd8lHEme7m9d"; // Replace with your EmailJS user ID

    // Collect form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      comments: form.comments.value,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Thanks for your message!");
        form.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send message. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false); // Enable button after submission
      });
  };

  return (
    <>
      <form className="contact-form contact-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Phone"
                type="text"
                autoComplete="off"
                required
              />
              <span className="alert-error"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group comments">
              <textarea
                className="form-control"
                id="comments"
                name="comments"
                placeholder="Tell Us About Project *"
                autoComplete="off"
                required
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button
              type="submit"
              name="submit"
              id="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <i className="fa fa-spinner fa-spin"></i>
              ) : (
                <i className="fa fa-paper-plane"></i>
              )}{" "}
              Get in Touch
            </button>
          </div>
        </div>
        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg"></div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
