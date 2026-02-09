import { motion } from 'framer-motion'

const EXPERIENCE = [
    {
        period: 'June 2024 – July 2024',
        role: 'MySQL Developer Trainee',
        company: 'Summer Training — The Complete MySQL Developer Course',
        desc: 'Acquired practical experience in MySQL, implementing ER modeling, DDL, DML, and complex SQL queries. Developed advanced queries using joins, nested queries, and aggregate functions. Utilized Git/GitHub for version control and collaborative project management.',
        tech: ['MySQL', 'Git', 'GitHub', 'SQL', 'ER Modeling'],
    },
    {
        period: 'July 2024 – August 2024',
        role: 'Data Analyst — Covid-19 Project',
        company: 'Self-Directed Project',
        desc: 'Designed and developed an interactive dashboard in Tableau Desktop to monitor global confirmed cases and death trends in real time. Implemented dynamic visualizations including heatmaps, line charts, and bar graphs. Optimized data processing, reducing loading time by 30%.',
        tech: ['Tableau', 'Data Analysis', 'Visualization', 'Excel'],
    },
    {
        period: 'May 2024 – June 2024',
        role: 'Data Analyst — Pharmacy Dashboard',
        company: 'Self-Directed Project',
        desc: 'Designed an interactive dashboard in Excel using pivot tables, slicers, and dynamic charts, enhancing report accuracy by 20%. Implemented real-time filtering by medicine category, payment method, and pharmacy branch, reducing data analysis time by 25%.',
        tech: ['Excel', 'Pivot Tables', 'Data Analysis', 'Charts'],
    },
    {
        period: 'Aug 2022 – Present',
        role: 'B.Tech CSE Student',
        company: 'Lovely Professional University, Phagwara',
        desc: 'Pursuing Bachelor of Technology in Computer Science and Engineering. Actively building projects in data analysis, AI/ML, and web development. Completed certifications from NPTEL, Coursera, and Udemy in parallel.',
        tech: ['C++', 'Java', 'Python', 'DSA', 'Web Dev'],
    },
]

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="section-header">
                <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    My Journey
                </motion.p>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Experience & <span className="gradient">Timeline</span>
                </motion.h2>
            </div>

            <div className="timeline">
                {EXPERIENCE.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <div className="timeline-icon" />
                        <div className="timeline-card">
                            <span className="timeline-period">{exp.period}</span>
                            <h3 className="timeline-role">{exp.role}</h3>
                            <p className="timeline-company">{exp.company}</p>
                            <p className="timeline-desc">{exp.desc}</p>
                            <div className="timeline-tech">
                                {exp.tech.map((t, j) => (
                                    <span className="tech-pill" key={j}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
