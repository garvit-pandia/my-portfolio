import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // Using FormSubmit service
        try {
            await fetch('https://formsubmit.co/ajax/garvit9829@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            setSubmitted(true)
            setForm({ name: '', email: '', message: '' })
            setTimeout(() => setSubmitted(false), 4000)
        } catch {
            alert('Failed to send. Please try again or email me directly!')
        }
    }

    return (
        <section className="section" id="contact">
            <div className="section-header">
                <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    Get In Touch
                </motion.p>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Let's <span className="gradient">Connect</span>
                </motion.h2>
            </div>

            <div className="contact-grid">
                {/* Left — Info */}
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>Have an idea? Let's talk! 💡</h3>
                    <p>
                        I'm always open to discussing data projects, collaboration opportunities,
                        or just having a chat about technology and innovation.
                    </p>

                    <div className="contact-detail">
                        <div className="contact-detail-icon"><FaEnvelope /></div>
                        <div className="contact-detail-text">
                            <strong>Email</strong>
                            <a href="mailto:garvit9829@gmail.com">garvit9829@gmail.com</a>
                        </div>
                    </div>

                    <div className="contact-detail">
                        <div className="contact-detail-icon"><FaPhone /></div>
                        <div className="contact-detail-text">
                            <strong>Phone</strong>
                            +91-8905402023
                        </div>
                    </div>

                    <div className="contact-detail">
                        <div className="contact-detail-icon"><FaMapMarkerAlt /></div>
                        <div className="contact-detail-text">
                            <strong>Location</strong>
                            Lovely Professional University, Phagwara, Punjab
                        </div>
                    </div>

                    <div className="contact-socials">
                        <a href="https://github.com/garvit-pandia" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="GitHub">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/garvit-pandia/" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                        <a href="mailto:garvit9829@gmail.com" className="contact-social-link" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>

                {/* Right — Form */}
                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Tell me about your project..."
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="form-submit">
                        {submitted ? '✓ Message Sent!' : 'Send Message →'}
                    </button>
                </motion.form>
            </div>
        </section>
    )
}
