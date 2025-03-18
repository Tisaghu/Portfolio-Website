import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID || "default_service_id",
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "default_template_id",
            formData,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "default_public_key"
        )
        .then(() => {
            setIsSent(true);
            setError(null);
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
            setError("Failed to send message. Please try again.");
            console.error(err);
        });
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Contact Me</h2>
            {isSent && <p className="success-message">Message sent successfully!</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className="contact-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
