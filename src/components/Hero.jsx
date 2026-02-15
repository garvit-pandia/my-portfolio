import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-bg" />

            {/* Ambient glowing orbs */}
            <div className="hero-orb hero-orb--1" />
            <div className="hero-orb hero-orb--2" />
            <div className="hero-orb hero-orb--3" />
            <div className="hero-orb hero-orb--4" />

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.p
                    className="hero-greeting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Hello, I'm
                </motion.p>

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                >
                    Garvit Pandia
                </motion.h1>

                <motion.p
                    className="hero-tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85 }}
                >
                    Final Year CSE Student at LPU · Data Analyst & Full-Stack Developer ·
                    Crafting data-driven solutions and interactive web experiences.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.05 }}
                >
                    <a href="#contact" className="btn-primary">
                        Contact Me
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                        download="Garvit_Pandia_Resume.pdf"
                    >
                        My Resume
                    </a>
                </motion.div>

                <motion.div
                    className="hero-socials"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.25 }}
                >
                    <a
                        href="https://github.com/garvit-pandia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-social-link"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/garvit-pandia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-social-link"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="mailto:garvit9829@gmail.com"
                        className="hero-social-link"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <div className="scroll-indicator" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                <div className="scroll-mouse">
                    <div className="scroll-dot" />
                </div>
                <span className="scroll-text">Scroll</span>
            </div>
        </section>
    )
}
