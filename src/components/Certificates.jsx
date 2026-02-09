import { motion } from 'framer-motion'

const CERTIFICATES = [
    {
        icon: '🌐',
        title: 'Social Networks',
        issuer: 'NPTEL',
        date: 'November 2024',
    },
    {
        icon: '📊',
        title: 'Data Analysis with Tableau',
        issuer: 'Coursera',
        date: 'November 2024',
    },
    {
        icon: '🤖',
        title: 'Supervised ML: Regression & Classification',
        issuer: 'Coursera',
        date: 'October 2024',
    },
    {
        icon: '🗄️',
        title: 'Complete MySQL',
        issuer: 'E-Box',
        date: 'July 2024',
    },
    {
        icon: '⚡',
        title: 'Mastering DSA using C and C++',
        issuer: 'Udemy',
        date: 'February 2024',
    },
]

export default function Certificates() {
    return (
        <section className="section" id="certificates">
            <div className="section-header">
                <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    Credentials
                </motion.p>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Certifi<span className="gradient">cations</span>
                </motion.h2>
            </div>

            <div className="certificates-grid">
                {CERTIFICATES.map((cert, i) => (
                    <motion.div
                        key={i}
                        className="cert-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="cert-icon">{cert.icon}</div>
                        <h3 className="cert-title">{cert.title}</h3>
                        <p className="cert-issuer">{cert.issuer}</p>
                        <p className="cert-date">{cert.date}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
