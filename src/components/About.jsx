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
                                    color: '#6366f1',
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
                        <div className="stats-card github-stats-card">
                            <div className="stats-card-title">
                                <span className="icon">📈</span> GitHub Activity
                            </div>

                            {/* Quick Stats Row */}
                            <div className="github-quick-stats">
                                <div className="github-stat-box">
                                    <div className="github-stat-number">13</div>
                                    <div className="github-stat-label">Repositories</div>
                                </div>
                                <div className="github-stat-box">
                                    <div className="github-stat-number">3+</div>
                                    <div className="github-stat-label">Years Active</div>
                                </div>
                                <div className="github-stat-box">
                                    <div className="github-stat-number">5</div>
                                    <div className="github-stat-label">Languages</div>
                                </div>
                            </div>

                            {/* Mini Contribution Grid */}
                            <div className="github-contrib-section">
                                <div className="github-contrib-label">Contribution Activity</div>
                                <div className="github-contrib-grid">
                                    {Array.from({ length: 91 }, (_, i) => {
                                        const levels = [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4]
                                        const level = levels[Math.floor(Math.random() * levels.length)]
                                        return (
                                            <div
                                                key={i}
                                                className={`github-contrib-cell level-${level}`}
                                            />
                                        )
                                    })}
                                </div>
                                <div className="github-contrib-legend">
                                    <span>Less</span>
                                    <div className="github-contrib-cell level-0" />
                                    <div className="github-contrib-cell level-1" />
                                    <div className="github-contrib-cell level-2" />
                                    <div className="github-contrib-cell level-3" />
                                    <div className="github-contrib-cell level-4" />
                                    <span>More</span>
                                </div>
                            </div>

                            {/* Language Bars */}
                            <div className="lang-bar-group">
                                <div className="lang-bar-label"><span>JavaScript</span><span>32%</span></div>
                                <div className="lang-bar">
                                    <div className="lang-bar-fill" style={{ width: '32%', background: 'linear-gradient(90deg, #6366f1, #818cf8)' }} />
                                </div>
                            </div>
                            <div className="lang-bar-group">
                                <div className="lang-bar-label"><span>Python</span><span>28%</span></div>
                                <div className="lang-bar">
                                    <div className="lang-bar-fill" style={{ width: '28%', background: 'linear-gradient(90deg, #a855f7, #c084fc)' }} />
                                </div>
                            </div>
                            <div className="lang-bar-group">
                                <div className="lang-bar-label"><span>HTML / CSS</span><span>22%</span></div>
                                <div className="lang-bar">
                                    <div className="lang-bar-fill" style={{ width: '22%', background: 'linear-gradient(90deg, #ec4899, #f472b6)' }} />
                                </div>
                            </div>
                            <div className="lang-bar-group">
                                <div className="lang-bar-label"><span>TypeScript</span><span>12%</span></div>
                                <div className="lang-bar">
                                    <div className="lang-bar-fill" style={{ width: '12%', background: 'linear-gradient(90deg, #3b82f6, #60a5fa)' }} />
                                </div>
                            </div>
                            <div className="lang-bar-group">
                                <div className="lang-bar-label"><span>R</span><span>6%</span></div>
                                <div className="lang-bar">
                                    <div className="lang-bar-fill" style={{ width: '6%', background: 'linear-gradient(90deg, #10b981, #34d399)' }} />
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    )
}
