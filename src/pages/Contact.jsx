import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { warehouses } from "../data/warehouses";
import "./Contact.css";

const EMAILJS_SERVICE_ID = "service_zxkva1a";
const EMAILJS_TEMPLATE_ID = "template_iyvtdgj";
const EMAILJS_PUBLIC_KEY = "88-kG8q-BN4KqG3vj";

const contactInfo = [
  { icon: "📞", label: "Phone", value: "+91 97604 70337", href: "tel:+919760470337" },
  { icon: "✉️", label: "Email", value: "sagarrana9760@gmail.com", href: "mailto:sagarrana9760@gmail.com" },
  { icon: "🏢", label: "Office", value: "Deepak Properties, Reliance Road, Near Pilkuwa Toll Plaza NH9, Hapur – 245304, Delhi NCR", href: null },
  { icon: "🕐", label: "Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM", href: null },
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    warehouse: searchParams.get("warehouse") || "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  useEffect(() => {
    const wParam = searchParams.get("warehouse");
    if (wParam) {
      setForm((prev) => ({ ...prev, warehouse: wParam }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", warehouse: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="contact-page">
      {/* Header */}
      <section className="page-header contact-header">
        <div className="page-header__bg" />
        <div className="page-header__container">
          <motion.span
            className="page-header__pill"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in Touch
          </motion.span>
          <motion.h1
            className="page-header__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="page-header__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Have a question or want to enquire about a property? We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-layout">
          {/* Left — Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="contact-info__title">Let's Talk Business</h2>
            <p className="contact-info__text">
              Whether you're looking for your next warehouse space or have a general enquiry — our team is ready to help.
            </p>

            <div className="contact-info__items">
              {contactInfo.map((item) => (
                <div key={item.label} className="contact-info__item">
                  <div className="contact-info__icon">{item.icon}</div>
                  <div>
                    <div className="contact-info__label">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="contact-info__value contact-info__value--link">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-info__value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-info__note">
              <div className="contact-info__note-icon">⚡</div>
              <p>We typically respond within <strong>4–6 business hours</strong> on weekdays.</p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {status === "success" ? (
              <div className="contact-success">
                <div className="contact-success__icon">✅</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button
                  className="contact-success__reset"
                  onClick={() => setStatus("idle")}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="contact-form"
                noValidate
              >
                <h3 className="contact-form__title">Send us a Message</h3>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 99999 99999"
                      required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="Warehouse Enquiry">Warehouse Enquiry</option>
                      <option value="Pricing Information">Pricing Information</option>
                      <option value="Site Visit Request">Site Visit Request</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="warehouse">Interested Warehouse (optional)</label>
                  <select
                    id="warehouse"
                    name="warehouse"
                    value={form.warehouse}
                    onChange={handleChange}
                  >
                    <option value="">Not specific / General enquiry</option>
                    {warehouses.map((w) => (
                      <option key={w.id} value={w.name}>
                        {w.name} — {w.location}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-form__group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements — area needed, duration, specific features, budget, etc."
                    rows={5}
                    required
                  />
                </div>

                {status === "error" && (
                  <div className="contact-form__error">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  className="contact-form__submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <span className="contact-form__spinner" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
