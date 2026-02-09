import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCheck } from 'react-icons/fa'

const PROJECTS = [
    {
        category: 'AI / ML',
        title: 'AI Resume Analyzer',
        desc: 'A powerful Streamlit-based application that uses Google Gemini AI to analyze resumes against job descriptions, providing instant feedback, match scores, and actionable career advice.',
        features: [
            'Smart matching with relevance score (0-100%)',
            'AI-powered strengths & weaknesses analysis',
            'Recruitment-style profile summary',
            'Privacy-focused — no data stored',
        ],
        tech: ['Python', 'Streamlit', 'Google Gemini', 'PyPDF2'],
        color: '#8E75B2',
        github: 'https://github.com/garvit-pandia/ai-resume-analyzer',
        preview: null,
        emoji: '🤖',
    },
    {
        category: 'Web Development',
        title: 'Digital Marketing Hub',
        desc: 'A comprehensive, multi-page educational website covering all aspects of digital marketing — from SEO & Social Media to PPC, Email Marketing, and Web Analytics, with interactive Three.js backgrounds and GA4 analytics.',
        features: [
            '10+ pages of in-depth digital marketing content',
            'Interactive Three.js animated backgrounds',
            'Dark/Light theme toggle',
            'GA4 custom event tracking integration',
        ],
        tech: ['HTML', 'CSS', 'JavaScript', 'Three.js', 'GA4'],
        color: '#6366f1',
        github: 'https://github.com/garvit-pandia/digital-marketing-guide-101',
        preview: null,
        emoji: '📱',
    },
    {
        category: 'Data Visualization',
        title: 'Covid-19 Analysis Dashboard',
        desc: 'An interactive dashboard built in Tableau Desktop to monitor global confirmed cases and death trends in real-time, providing actionable insights for data-driven decision-making.',
        features: [
            'Real-time heatmaps and trend charts',
            'Dynamic filtering and drill-down capabilities',
            'Optimized data processing (30% faster loading)',
            'Intuitive bar graphs and line charts',
        ],
        tech: ['Tableau', 'Data Analysis', 'Excel', 'Visualization'],
        color: '#28c840',
        github: null,
        preview: null,
        emoji: '📊',
    },
    {
        category: 'Data Analysis',
        title: 'Pharmacy Sales Dashboard',
        desc: 'An interactive dashboard in Excel with pivot tables, slicers, and dynamic charts that improved report accuracy by 20% and reduced data analysis time by 25%.',
        features: [
            'Real-time filtering by category & branch',
            'Revenue & sales visualization',
            'Customer demographics analysis',
            '10% improvement in inventory optimization',
        ],
        tech: ['Excel', 'Pivot Tables', 'Data Analysis', 'Charts'],
        color: '#ff6b6b',
        github: null,
        preview: null,
        emoji: '💊',
    },
]

export default function Projects() {
    const [current, setCurrent] = useState(0)
    const project = PROJECTS[current]

    const next = () => setCurrent((c) => (c + 1) % PROJECTS.length)
    const prev = () => setCurrent((c) => (c - 1 + PROJECTS.length) % PROJECTS.length)

    return (
        <section className="section" id="projects">
            <div className="section-header">
                <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    My Work
                </motion.p>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Featured <span className="gradient">Projects</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    A collection of projects showcasing my skills in AI, data analysis, and web development.
                </motion.p>
            </div>

            <div className="projects-slider">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        className="project-slide"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Image / Preview card */}
                        <div
                            className="project-image-card"
                            style={{ '--project-color': project.color }}
                        >
                            <div className="project-image-placeholder" style={{ color: project.color }}>
                                {project.emoji}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="project-details">
                            <span
                                className="project-category"
                                style={{ color: project.color, borderColor: project.color + '40' }}
                            >
                                {project.category}
                            </span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.desc}</p>

                            <div className="project-features">
                                {project.features.map((f, i) => (
                                    <div className="project-feature" key={i}>
                                        <FaCheck className="check" style={{ color: project.color }} />
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="project-tech">
                                {project.tech.map((t, i) => (
                                    <span className="tech-pill" key={i}>{t}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link project-link--ghost">
                                        <FaGithub /> GitHub
                                    </a>
                                )}
                                {project.preview && (
                                    <a href={project.preview} target="_blank" rel="noopener noreferrer" className="project-link project-link--primary">
                                        <FaExternalLinkAlt /> Preview
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="slider-nav">
                    <button className="slider-arrow" onClick={prev} aria-label="Previous project">
                        <FaChevronLeft />
                    </button>
                    <div className="slider-dots">
                        {PROJECTS.map((_, i) => (
                            <div
                                key={i}
                                className={`slider-dot ${i === current ? 'active' : ''}`}
                                onClick={() => setCurrent(i)}
                            />
                        ))}
                    </div>
                    <button className="slider-arrow" onClick={next} aria-label="Next project">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    )
}
