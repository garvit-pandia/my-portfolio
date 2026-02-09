import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-name">GARVIT PANDIA</div>
            <div className="footer-socials">
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
            <p className="footer-copyright">
                © {new Date().getFullYear()} Garvit Pandia. Built with React & ❤️
            </p>
        </footer>
    )
}
