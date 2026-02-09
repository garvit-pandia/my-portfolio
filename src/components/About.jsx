import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    FaReact, FaJava, FaPython, FaGitAlt, FaHtml5,
    FaDatabase, FaStar, FaTrophy, FaCode
} from 'react-icons/fa'
import {
    SiCplusplus, SiTableau, SiJavascript, SiMysql
} from 'react-icons/si'

const ORBIT_ICONS = [
    { icon: <SiCplusplus />, angle: 0 },
    { icon: <FaJava />, angle: 60 },
    { icon: <FaPython />, angle: 120 },
    { icon: <SiJavascript />, angle: 180 },
    { icon: <FaHtml5 />, angle: 240 },
    { icon: <FaGitAlt />, angle: 300 },
]

const EDUCATION = [
    {
        year: '2022 – Present',
        title: 'B.Tech, Computer Science & Engineering',
        school: 'Lovely Professional University, Phagwara',
        score: 'CGPA: 7.1',
    },
    {
        year: '2020 – 2021',
        title: 'Intermediate (PCM)',
        school: 'Prince Career Pioneer School, Sikar',
        score: 'Percentage: 85.4%',
    },
    {
        year: '2019 – 2020',
        title: 'Matriculation',
        school: 'Witty International School, Udaipur',
        score: 'Percentage: 81.6%',
    },
]

const ACHIEVEMENTS = [
    { icon: '⭐', text: 'HackerRank 4-Star in Java' },
    { icon: '🏆', text: 'HackerRank 3-Star in SQL' },
    { icon: '📊', text: '5+ Certified Courses (NPTEL, Coursera, Udemy)' },
    { icon: '💻', text: 'Multiple Real-World Data Projects' },
]

const SKILLS_SUMMARY = {
    languages: ['C++', 'Java', 'R', 'Python'],
    frameworks: ['HTML', 'CSS', 'JavaScript'],
    tools: ['MySQL', 'Git', 'GitHub', 'Tableau'],
    soft: ['Collaborative', 'Workflow Optimization', 'Flexibility', 'Communication'],
}

// Animate on scroll wrapper
function RevealOnScroll({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    )
}

export default function About() {
    const [activeTab, setActiveTab] = useState('education')

    return (
        <section className="section" id="about">
            <div className="section-header">
                <motion.p className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    Who Am I
                </motion.p>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    About <span className="gradient">Me</span>
                </motion.h2>
            </div>

            <div className="about-grid">
                {/* LEFT COLUMN */}
                <div>
                    {/* Orbiting icons around profile */}
                    <RevealOnScroll>
                        <div className="orbit-container">
                            {/* Profile picture placeholder */}
                            <div
                                className="orbit-image"
                                style={{
                                    background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '64px',
                                    fontWeight: 700,
                                    color: '#64f3ff',
                                }}
                            >
                                GP
                            </div>

                            <div className="orbit-ring">
                                {ORBIT_ICONS.map((item, i) => {
                                    const radius = 140
                                    const rad = (item.angle * Math.PI) / 180
                                    const x = 160 + radius * Math.cos(rad) - 20
                                    const y = 160 + radius * Math.sin(rad) - 20
                                    return (
                                        <div
                                            key={i}
                                            className="orbit-icon"
                                            style={{ left: x, top: y }}
                                        >
                                            {item.icon}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Education / Achievements tabs */}
                    <RevealOnScroll delay={0.15}>
                        <div className="tab-container">
                            <div className="tab-buttons">
                                <button
                                    className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('education')}
                                >
                                    🎓 Education
                                </button>
                                <button
                                    className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('achievements')}
                                >
                                    🏅 Achievements
                                </button>
                            </div>

                            {activeTab === 'education' && (
                                <motion.div
                                    key="education"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {EDUCATION.map((edu, i) => (
                                        <div className="edu-card" key={i}>
                                            <span className="edu-year">{edu.year}</span>
                                            <div className="edu-title">{edu.title}</div>
                                            <div className="edu-school">{edu.school}</div>
                                            <div className="edu-score">{edu.score}</div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            {activeTab === 'achievements' && (
                                <motion.div
                                    key="achievements"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="achievement-grid">
                                        {ACHIEVEMENTS.map((ach, i) => (
                                            <div className="achievement-card" key={i}>
                                                <div className="achievement-icon">{ach.icon}</div>
                                                <div className="achievement-text">{ach.text}</div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </RevealOnScroll>
                </div>

                {/* RIGHT COLUMN */}
                <div>
                    {/* Summary card */}
                    <RevealOnScroll>
                        <div className="summary-card">
                            <h3 className="summary-title">Data Enthusiast & Developer</h3>
                            <p className="summary-text">
                                I'm a final year Computer Science student at Lovely Professional University,
                                passionate about turning raw data into actionable insights. With hands-on
                                experience in data analysis, visualization with Tableau, and full-stack
                                web development, I build solutions that bridge the gap between data and
                                decision-making.
                            </p>
                            <div className="summary-tags">
                                <span className="summary-tag">🚀 Problem Solver</span>
                                <span className="summary-tag">📊 Data Driven</span>
                                <span className="summary-tag">💡 Quick Learner</span>
                                <span className="summary-tag">🤝 Team Player</span>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Skills overview card */}
                    <RevealOnScroll delay={0.15}>
                        <div className="stats-card">
                            <div className="stats-card-title">
                                <span className="icon">🧰</span> Technical Arsenal
                            </div>

                            <div className="diff-bar-group">
                                <div className="diff-bar-label">
                                    <span className="name">Languages</span>
                                    <span className="count">{SKILLS_SUMMARY.languages.join(' · ')}</span>
                                </div>
                                <div className="diff-bar">
                                    <div className="diff-bar-fill easy" style={{ width: '85%' }} />
                                </div>
                            </div>

                            <div className="diff-bar-group">
                                <div className="diff-bar-label">
                                    <span className="name">Web Technologies</span>
                                    <span className="count">{SKILLS_SUMMARY.frameworks.join(' · ')}</span>
                                </div>
                                <div className="diff-bar">
                                    <div className="diff-bar-fill medium" style={{ width: '75%' }} />
                                </div>
                            </div>

                            <div className="diff-bar-group">
                                <div className="diff-bar-label">
                                    <span className="name">Tools & Platforms</span>
                                    <span className="count">{SKILLS_SUMMARY.tools.join(' · ')}</span>
                                </div>
                                <div className="diff-bar">
                                    <div className="diff-bar-fill" style={{ width: '90%', background: '#9b87ff' }} />
                                </div>
                            </div>

                            <div className="diff-bar-group">
                                <div className="diff-bar-label">
                                    <span className="name">Soft Skills</span>
                                    <span className="count">{SKILLS_SUMMARY.soft.join(' · ')}</span>
                                </div>
                                <div className="diff-bar">
                                    <div className="diff-bar-fill" style={{ width: '80%', background: 'linear-gradient(90deg, #64f3ff, #9b87ff)' }} />
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* GitHub Stats Card */}
                    <RevealOnScroll delay={0.25}>
                        <div className="stats-card">
                            <div className="stats-card-title">
                                <span className="icon">📈</span> GitHub Activity
                            </div>
                            <div className="ring-container">
                                <svg className="ring-svg" viewBox="0 0 120 120">
                                    <circle cx="60" cy="60" r="50" className="ring-bg" />
                                    <circle
                                        cx="60" cy="60" r="50"
                                        className="ring-progress"
                                        stroke="url(#grad1)"
                                        strokeDasharray={`${2 * Math.PI * 50}`}
                                        strokeDashoffset={`${2 * Math.PI * 50 * (1 - 0.72)}`}
                                        transform="rotate(-90 60 60)"
                                    />
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#64f3ff" />
                                            <stop offset="100%" stopColor="#9b87ff" />
                                        </linearGradient>
                                    </defs>
                                    <text x="60" y="56" className="ring-text">B+</text>
                                    <text x="60" y="72" className="ring-label">Grade</text>
                                </svg>
                                <div>
                                    <div style={{ fontSize: 14, marginBottom: 8, color: '#b0b8c4' }}>
                                        Active contributor with projects in Python, JavaScript, and Data Analysis
                                    </div>
                                    <div style={{ fontSize: 24, fontWeight: 700, color: '#64f3ff' }}>
                                        10+ Repositories
                                    </div>
                                </div>
                            </div>

                            <div className="lang-bar-group">
                                <div className="lang-bar-label"><span>Python</span><span>35%</span></div>
                                <div className="lang-bar">
                                    <div className="lang-bar-fill" style={{ width: '35%', background: '#3776ab' }} />
                                </div>
                            </div>
                            <div className="lang-bar-group">
                                <div className="lang-bar-label"><span>JavaScript</span><span>25%</span></div>
                                <div className="lang-bar">
                                    <div className="lang-bar-fill" style={{ width: '25%', background: '#f7df1e' }} />
                                </div>
                            </div>
                            <div className="lang-bar-group">
                                <div className="lang-bar-label"><span>HTML/CSS</span><span>25%</span></div>
                                <div className="lang-bar">
                                    <div className="lang-bar-fill" style={{ width: '25%', background: '#e34c26' }} />
                                </div>
                            </div>
                            <div className="lang-bar-group">
                                <div className="lang-bar-label"><span>C++ / Java</span><span>15%</span></div>
                                <div className="lang-bar">
                                    <div className="lang-bar-fill" style={{ width: '15%', background: '#28c840' }} />
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    )
}
