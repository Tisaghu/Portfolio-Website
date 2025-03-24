import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [captchaVerified, setCaptchaVerified] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptcha = (value) => {
        setCaptchaVerified(true); // User completed CAPTCHA
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaVerified) {
            setError("Please complete the CAPTCHA.");
            return;
        }

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setError("All fields are required.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Please enter a valid email.");
            return;
        }

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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
                <input type="text" name="name" placeholder="Your Name" autocomplete="on" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your Email" autocomplete="on" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" aria-hidden="true" value={formData.message} onChange={handleChange} required />

                <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} onChange={handleCaptcha} />

                <button type="submit" disabled={!captchaVerified}>Send Message</button>
            </form>
        </section>
    );
}

export default Contact;
